import * as Yup from 'yup';

export const createUserSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required().min(8),
});
