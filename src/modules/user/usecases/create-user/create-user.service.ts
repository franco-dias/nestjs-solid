import { Inject, Injectable } from '@nestjs/common';

import {
  UsersRepository,
  UsersRepositoryToken,
} from '@modules/user/domain/repositories/users.repository';

import { CreateUserDTO } from '../../domain/dtos/create-user.dto';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject(UsersRepositoryToken)
    private usersRepository: UsersRepository,
  ) {}

  async execute(data: CreateUserDTO): Promise<User> {
    const user = await this.usersRepository.create(data);
    return user;
  }
}
