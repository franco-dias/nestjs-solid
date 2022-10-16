import { Maybe } from 'src/common/types/maybe';

import { CreateUserDTO } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';

export const UsersRepositoryToken = 'UsersRepository';

export interface UsersRepository {
  list(): Promise<User[]>;
  create(data: CreateUserDTO): Promise<User>;
  getById(id: number): Promise<Maybe<User>>;
}
