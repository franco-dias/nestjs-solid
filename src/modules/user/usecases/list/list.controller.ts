import { Controller, Get } from '@nestjs/common';

import { UsersRepositoryImpl } from '@modules/user/infrastructure/orm/repositories/users.repository';

@Controller('/users')
export class ListUsersController {
  constructor(private usersRepository: UsersRepositoryImpl) {}

  @Get()
  listUsers() {
    return this.usersRepository.list();
  }
}
