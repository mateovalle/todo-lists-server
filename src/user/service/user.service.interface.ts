import { SignUpDTO } from '@models/user/dto/SignUpDTO';
import { LogInDTO } from '@models/user/dto/LogInDTO';

export abstract class IUserService {
  abstract signUp(signUpDTO: SignUpDTO): Promise<void>;
  abstract logIn(loginDTO: LogInDTO): Promise<string>;
}
