import { Inject, Injectable } from '@nestjs/common';

import { TranslationService } from '@common/services/i18n.service';
import {
  UsersRepository,
  UsersRepositoryToken,
} from '@modules/user/domain/repositories/users.repository';

@Injectable()
export class ListUsersService {
  constructor(
    @Inject(UsersRepositoryToken)
    private usersRepository: UsersRepository,
    private translationService: TranslationService,
  ) {}

  async execute() {
    const list = await this.usersRepository.list();
    return list;
  }
}
