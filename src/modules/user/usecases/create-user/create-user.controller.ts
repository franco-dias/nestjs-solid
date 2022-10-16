import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

import { PayloadValidatorPipe } from '@common/pipes/payload-validator.pipe';

import { CreateUserService } from './create-user.service';
import { apiBody } from './create-user.swagger';
import { createUserSchema } from './create-user.util';

import { CreateUserDTO } from '../../domain/dtos/create-user.dto';

@ApiTags('Users')
@Controller('/users')
export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  @Post('/')
  @UsePipes(new PayloadValidatorPipe(createUserSchema))
  @ApiBearerAuth()
  @ApiBody(apiBody)
  createUser(@Body() data: CreateUserDTO) {
    const user = this.createUserService.execute(data);
    return user;
  }
}
