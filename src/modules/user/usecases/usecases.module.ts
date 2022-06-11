import { Module } from '@nestjs/common';

import { CreateUserController } from './create-user/create-user.controller';
import { CreateUserService } from './create-user/create-user.service';
import { FindOneController } from './find-one/find-one.controller';
import { FindOneService } from './find-one/find-one.service';
import { ListUsersController } from './list/list.controller';
import { ListUsersService } from './list/list.service';

import { RepositoriesModule } from '../infrastructure/orm/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [FindOneController, ListUsersController, CreateUserController],
  providers: [FindOneService, ListUsersService, CreateUserService],
})
export class UseCasesModule {}
