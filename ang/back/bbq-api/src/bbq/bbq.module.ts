import { User } from './user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Barbecue } from './barbecue.entity';
import { BarbecueController } from './barbecue/barbecue.controller';
import { BarbecueService } from './barbecue/barbecue.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([Barbecue, User])],
    exports: [TypeOrmModule],
    controllers: [BarbecueController, UserController],
    providers: [BarbecueService, UserService],
})
export class BbqModule {}
