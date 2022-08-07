import { Roles } from './roles';

export interface User {
  email: string;
  password: string;
  username: string;
  role: Roles;
}
