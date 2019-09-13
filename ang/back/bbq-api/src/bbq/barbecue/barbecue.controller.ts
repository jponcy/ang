import { Body, Controller, Get, Post, Param, Res, HttpStatus, UseInterceptors, NotFoundException, Put } from '@nestjs/common';

import { Barbecue } from './../barbecue.entity';
import { BarbecueService } from './barbecue.service';
import { Response } from 'express';
import { NotFoundInterceptor } from '../../not-found.interceptor';

@Controller('bbq')
export class BarbecueController {

  constructor(private readonly service: BarbecueService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @UseInterceptors(NotFoundInterceptor)
  getOne(@Param('id') id: number) {
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
