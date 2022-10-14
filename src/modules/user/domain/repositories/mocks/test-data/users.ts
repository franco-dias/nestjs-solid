import { v4 as uuid } from 'uuid';

import { User } from '@modules/user/domain/entities/user';

const list: User[] = [
  {
    id: uuid(),
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    password: '12345678',
  },
  {
    id: uuid(),
    name: 'Tom Doe',
    email: 'tom.doe@gmail.com',
    password: '12345678',
  },
];

export const userTestData = {
  list,
};
