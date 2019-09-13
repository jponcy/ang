import { Body, Controller, Get, NotFoundException, Param, Post, Put, UseInterceptors } from '@nestjs/common';

import { NotFoundInterceptor } from '../../not-found.interceptor';
import { Barbecue } from './../barbecue.entity';
import { BarbecueService } from './barbecue.service';
import { ApiUseTags, ApiResponseModelProperty, ApiResponse } from '@nestjs/swagger';

@Controller('bbq')
@ApiUseTags('barbecue')
export class BarbecueController {

  constructor(private readonly service: BarbecueService) {}

  @Get()
  @ApiResponse({ status: 200, type: Barbecue, isArray: true })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @UseInterceptors(NotFoundInterceptor)
  @ApiResponse({ status: 200, type: Barbecue })
  @ApiResponse({ status: 404, description: 'No barbecue found for given id' })
  getOne(@Param('id') id: number): Promise<Barbecue> {
    return this.service.findOne(id);
  }

  /**
   *
   * @param bbq The new entity to create.
   * curl http://localhost:3000/bbq
   * -X POST -H "Content-Type: application/json"
   * -d '{"label": "toto", "startAt": "2010-08-26T05:05:05", "address": "10 impasse de l esperance"}'
   */
  @Post()
  create(@Body() bbq: Barbecue) {
    return this.service.create(bbq);
  }

  /**
   *
   * @param id
   * @param bbq
   * curl http://localhost:3000/bbq/1
   * -X PUT -H "Content-Type: application/json"
   * -d '{"label": "toto 2", "startAt": "2010-08-26T05:05:05", "address": "10 impasse de l esperance"}'
   */
  @Put(':id')
  async update(@Param('id') id: number, @Body() bbq: Barbecue) {
    let entity: Barbecue = null;

    await this.service
      .findOne(id)
      .then(v => entity = v);

    if (!entity) {
      throw new NotFoundException();
    }

    entity.label = bbq.label === null ? null : bbq.label || entity.label;

    return this.service.update(entity);
  }
}
