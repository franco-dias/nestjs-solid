import { Module } from '@nestjs/common';
import { I18nModule, HeaderResolver } from 'nestjs-i18n';

import { join } from 'path';

import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [{ use: HeaderResolver, options: ['lang'] }],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
