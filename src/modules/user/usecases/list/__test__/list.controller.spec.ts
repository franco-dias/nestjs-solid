import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

import { MockRepositoriesModule } from '@modules/user/domain/repositories/mocks/repositories-mock.module';
import { userTestData } from '@modules/user/domain/repositories/mocks/test-data/users';

import { ListUsersController } from '../list.controller';
import { ListUsersService } from '../list.service';

/* e2e test */
describe('ListUsers controller', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [MockRepositoriesModule],
      providers: [ListUsersService],
      controllers: [ListUsersController],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('@GET /users should return all users', async () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(userTestData.list);
  });

  /* test all branches for the controller, including query, route and body params */
});
