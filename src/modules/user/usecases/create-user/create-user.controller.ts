import { Body, Controller, Post, UsePipes } from '@nestjs/common';

import { PayloadValidatorPipe } from '@pipes/payload-validator.pipe';

import { CreateUserService } from './create-user.service';
import { createUserSchema } from './create-user.util';

import { CreateUserDTO } from '../../domain/dtos/create-user';

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
