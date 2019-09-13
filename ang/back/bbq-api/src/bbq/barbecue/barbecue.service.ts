import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Barbecue } from '../barbecue.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BarbecueService {
  constructor(@InjectRepository(Barbecue) private readonly repo: Repository<Barbecue>) {}

  getAll(): Promise<Barbecue[]> {
    return this.repo.find({relations: ['owner']});
  }

  findOne(id: number): Promise<Barbecue> {
    return this.repo.findOne(id, {relations: ['owner']});
  }

  create(bbq: Barbecue): Promise<Barbecue> {
    return this.repo.save(bbq);
  }

  update(bbq: Barbecue): Promise<Barbecue> {
    return this.repo.save(bbq);
  }

  delete(bbq: Barbecue) {
    this.repo.save(bbq, {  })
    return this.repo.delete(bbq);
  }
}
