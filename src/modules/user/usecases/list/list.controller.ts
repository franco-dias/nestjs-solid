import { Controller, Get, Header } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

import { TranslationService } from '@common/services/i18n.service';

import { ListUsersService } from './list.service';

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
