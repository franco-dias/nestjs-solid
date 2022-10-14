import { Test } from '@nestjs/testing';

import { MockRepositoriesModule } from '@modules/user/domain/repositories/mocks/repositories-mock.module';
import { userTestData } from '@modules/user/domain/repositories/mocks/test-data/users';

import { ListUsersService } from '../list.service';

/* unit test */
describe('ListUsers service', () => {
  let listUsersService: ListUsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [MockRepositoriesModule],
      providers: [ListUsersService],
    }).compile();

    listUsersService = module.get<ListUsersService>(ListUsersService);
  });

  it('should list the existing users', async () => {
    const users = await listUsersService.execute();
    expect(users).toEqual(userTestData.list);
  });

  /* test all business rules related to the service here */
});
