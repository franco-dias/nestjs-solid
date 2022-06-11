import { Injectable } from '@nestjs/common';

import { CreateUserDTO } from '../../domain/dtos/create-user';
import { User } from '../../domain/entities/user';
import { UsersRepositoryImpl } from '../../infrastructure/orm/repositories/users.repository';

@Injectable()
export class CreateUserService {
  constructor(private usersRepository: UsersRepositoryImpl) {}

  execute(data: CreateUserDTO): User {
    const user = this.usersRepository.create(data);
    return user;
  }
}
