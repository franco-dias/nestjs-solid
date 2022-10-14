import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { I18nService, TranslateOptions } from 'nestjs-i18n';

type RequestType = { headers: { [key: string]: string } };

@Injectable()
export class TranslationService {
  constructor(
    private readonly i18n: I18nService,
    @Inject(REQUEST) private request: RequestType,
  ) {}

  async translate(key: string, options?: TranslateOptions) {
    const translation = await this.i18n.t(key, {
      ...options,
      lang: this.request.headers.lang,
    });
    return translation;
  }
}
