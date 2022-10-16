import { CreateUserDTO } from '@modules/user/domain/dtos/create-user.dto';

const apiBody = {
  type: CreateUserDTO,
  examples: {
    a: {
      summary: 'User information',
      value: {
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        password: '12345678',
      },
    },
  },
};

export { apiBody };
