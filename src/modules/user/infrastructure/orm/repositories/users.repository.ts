import { Injectable } from '@nestjs/common';

import { PrismaService } from '@common/services/prisma.service';
import { Maybe } from '@common/types/maybe';
import { CreateUserDTO } from '@modules/user/domain/dtos/create-user.dto';
import { User } from '@modules/user/domain/entities/user.entity';
import { UsersRepository } from '@modules/user/domain/repositories/users.repository';

/* Simulates an ORM implementation */
@Injectable()
class UsersRepositoryImpl implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async list(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async create(data: CreateUserDTO): Promise<User> {
    const { email, name, password } = data;
    try {
      const user = await this.prisma.user.create({
        data: { email, name, password },
      });
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async getById(id: number): Promise<Maybe<User>> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user;
  }
}

export { UsersRepositoryImpl };
