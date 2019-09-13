import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { User } from '../user.entity';
import { UserService } from './user.service';

@Controller('user')
@Crud({
  model: {
    type: User,
  },
})
export class UserController {
  constructor(public service: UserService){}
}
