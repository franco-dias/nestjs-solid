import { Inject, Injectable } from '@nestjs/common';

import {
  UsersRepository,
  UsersRepositoryToken,
} from '@modules/user/domain/repositories/users.repository';

@Injectable()
export class ListUsersService {
  constructor(
    @Inject(UsersRepositoryToken)
    private usersRepository: UsersRepository,
  ) {}

  async execute() {
    const list = await this.usersRepository.list();
    return list;
  }
}
