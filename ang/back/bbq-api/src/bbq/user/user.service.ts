import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
    constructor(@InjectRepository(User) readonly repo: Repository<User>) {
        super(repo);
    }
}
