import { Module } from '@nestjs/common';

import { UsersRepositoryImpl } from './users.repository';

@Module({
  providers: [UsersRepositoryImpl],
  exports: [UsersRepositoryImpl],
})
export class RepositoriesModule {}
