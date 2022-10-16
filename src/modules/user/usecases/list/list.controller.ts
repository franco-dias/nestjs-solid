import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TranslationService } from '@common/services/i18n.service';

import { ListUsersService } from './list.service';

@ApiTags('Users')
@Controller('/users')
export class ListUsersController {
  constructor(
    private translationService: TranslationService,
    private listUsersService: ListUsersService,
  ) {}

  @Get()
  async listUsers() {
    return {
      data: await this.listUsersService.execute(),
      translation: await this.translationService.translate('test.HELLO'),
    };
  }
}
