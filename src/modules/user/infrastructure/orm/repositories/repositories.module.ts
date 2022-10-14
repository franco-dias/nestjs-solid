import { Module } from '@nestjs/common';

import { UsersRepositoryToken } from '@modules/user/domain/repositories/users.repository';

import { UsersRepositoryImpl } from './users.repository';

/* 
  Inject UsersRepository via token, decouples implementation from the whole app
  The only place to change code if the Repository is
  re-implemented by another class is the object below, on the property useClass
*/
const UsersRepository = {
  useClass: UsersRepositoryImpl,
  provide: UsersRepositoryToken,
};

@Module({
  providers: [UsersRepository],
  exports: [UsersRepository],
})
export class RepositoriesModule {}
