import { ApiUseTags, ApiModelProperty } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { User } from '../user.entity';
import { UserService } from './user.service';

// https://docs.nestjs.com/recipes/crud
@Controller('user')
@Crud({
  model: { type: User },
})
@ApiUseTags('user')
export class UserController {
  constructor(public service: UserService) {}
}
