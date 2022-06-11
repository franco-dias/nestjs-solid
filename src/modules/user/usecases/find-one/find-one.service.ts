import { Injectable, NotFoundException } from '@nestjs/common';

import { Maybe } from '@common/types/maybe';
import { User } from '@modules/user/domain/entities/user';
import { UsersRepositoryImpl } from '@modules/user/infrastructure/orm/repositories/users.repository';

@Injectable()
export class FindOneService {
  constructor(private usersRepository: UsersRepositoryImpl) {}

  execute(id: string): Maybe<User> {
    const user = this.usersRepository.getById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
