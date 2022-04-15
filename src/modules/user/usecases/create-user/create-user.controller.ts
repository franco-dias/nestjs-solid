import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { PayloadValidatorPipe } from 'src/common/pipes/payload-validator.pipe';
import { CreateUserDTO } from '../../domain/dtos/create-user';
import { CreateUserService } from './create-user.service';
import { createUserSchema } from './create-user.util';

@Controller('/users')
export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  @Post('/')
  @UsePipes(new PayloadValidatorPipe(createUserSchema))
  createUser(@Body() data: CreateUserDTO) {
    const user = this.createUserService.execute(data);
    return user;
  }
}
