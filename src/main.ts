import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api name')
    .addBearerAuth()
    .setDescription('Some description for the API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory: (_, method: string) => method,
  });
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
