import { v4 as uuid } from 'uuid';

import { Maybe } from '@common/types/maybe';
import { CreateUserDTO } from '@modules/user/domain/dtos/create-user';
import { User } from '@modules/user/domain/entities/user';
import { UsersRepository } from '@modules/user/domain/repositories/users.repository';

import { userTestData } from './test-data/users';

class MockUsersRepository implements UsersRepository {
  private users: User[] = userTestData.list;

  list(): User[] {
    return this.users;
  }

  create(data: CreateUserDTO): User {
    const { email, name, password } = data;
    const user = new User();
    Object.assign(user, { name, email, password, id: uuid() });
    this.users.push(user);
    return user;
  }

  getById(id: string): Maybe<User> {
    return this.users.find((user) => user.id === id);
  }
}

export { MockUsersRepository };
