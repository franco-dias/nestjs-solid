import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { Maybe } from '@common/types/maybe';
import { User } from '@modules/user/domain/entities/user.entity';
import { UsersRepositoryToken } from '@modules/user/domain/repositories/users.repository';
import { UsersRepositoryImpl } from '@modules/user/infrastructure/orm/repositories/users.repository';

@Injectable()
export class FindOneService {
  constructor(
    @Inject(UsersRepositoryToken)
    private usersRepository: UsersRepositoryImpl,
  ) {}

  async execute(id: number): Promise<Maybe<User>> {
    const user = await this.usersRepository.getById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
