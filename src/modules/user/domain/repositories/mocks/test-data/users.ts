import { User } from '@modules/user/domain/entities/user';

const list: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    password: '12345678',
  },
  {
    id: 2,
    name: 'Tom Doe',
    email: 'tom.doe@gmail.com',
    password: '12345678',
  },
];

export const userTestData = {
  list,
};
