import { CreateUserDTO } from 'src/modules/user/domain/dtos/create-user';
import { User } from 'src/modules/user/domain/entities/user';
import { v4 as uuid } from 'uuid';
import { UsersRepository } from 'src/modules/user/domain/repositories/users.repository';
import { Maybe } from 'src/common/types/maybe';

class UsersRepositoryImpl implements UsersRepository {
  private users: User[] = [];

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

export { UsersRepositoryImpl };
