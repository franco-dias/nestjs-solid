import { Maybe } from 'src/common/types/maybe';

import { CreateUserDTO } from '../dtos/create-user';
import { User } from '../entities/user';

export interface UsersRepository {
  list(): User[];
  create(data: CreateUserDTO): User;
  getById(id: string): Maybe<User>;
}
