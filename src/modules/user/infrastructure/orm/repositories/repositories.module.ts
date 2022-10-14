import { Module } from '@nestjs/common';

import { PrismaService } from '@common/services/prisma.service';
import { UsersRepositoryToken } from '@modules/user/domain/repositories/users.repository';

import { UsersRepositoryImpl } from './users.repository';

/*
  Inject UsersRepository via token, decouples implementation from the whole app
  The only place to change code if the Repository is
  re-implemented by another class is the object below, on the property useClass
  Same for the Prisma service
*/
const UsersRepository = {
  useClass: UsersRepositoryImpl,
  provide: UsersRepositoryToken,
};

@Module({
  providers: [PrismaService, UsersRepository],
  exports: [UsersRepository],
})
export class RepositoriesModule {}
