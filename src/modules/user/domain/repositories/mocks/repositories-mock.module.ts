import { Module } from '@nestjs/common';

import { MockUsersRepository } from './users.repository';

import { UsersRepositoryToken } from '../users.repository';

const UsersRepository = {
  useClass: MockUsersRepository,
  provide: UsersRepositoryToken,
};

@Module({
  providers: [UsersRepository],
  exports: [UsersRepository],
})
export class MockRepositoriesModule {}
