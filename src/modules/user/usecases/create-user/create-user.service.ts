import { Inject, Injectable } from '@nestjs/common';

import {
  UsersRepository,
  UsersRepositoryToken,
} from '@modules/user/domain/repositories/users.repository';

import { CreateUserDTO } from '../../domain/dtos/create-user';
import { User } from '../../domain/entities/user';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject(UsersRepositoryToken)
    private usersRepository: UsersRepository,
  ) {}

  execute(data: CreateUserDTO): User {
    const user = this.usersRepository.create(data);
    return user;
  }
}
