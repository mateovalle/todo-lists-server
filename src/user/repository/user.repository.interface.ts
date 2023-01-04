import { User } from '@models/user/entities';

export abstract class IUserRepository {
  abstract create(username: string, hashedPassword: string): Promise<void>;
  abstract getByUsername(username: string): Promise<User>;
}
