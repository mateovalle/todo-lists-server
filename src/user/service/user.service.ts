import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from '@user/service/user.service.interface';
import { IUserRepository } from '@user/repository';
import { SignUpDTO } from '@models/user/dto/SignUpDTO';
import { ApiError } from '@shared/errors';
import { Hasher } from '@utils/hasher';
import { LogInDTO } from '@models/user/dto/LogInDTO';
import { Jwt } from '@utils/jwt';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(IUserRepository) private readonly repository: IUserRepository,
    @Inject(Hasher) private readonly hasher: Hasher,
    @Inject(Jwt) private readonly jwt: Jwt,
  ) {}

  async signUp(signupDTO: SignUpDTO): Promise<void> {
    const username = signupDTO.username;
    const hashedPassword = await this.hasher.hash(signupDTO.password);
    if (!!(await this.repository.getByUsername(signupDTO.username))) {
      throw new ApiError(409, 'username already in use.');
    }

    await this.repository.create(username, hashedPassword);
  }

  async logIn(loginDTO: LogInDTO): Promise<string> {
    const user = await this.repository.getByUsername(loginDTO.username);
    console.log(user);
    if (!user) {
      throw new ApiError(409, 'username not found.');
    }
    if (await this.hasher.compare(loginDTO.password, user.password)) {
      return this.jwt.login(user.id);
    } else {
      throw new ApiError(409, 'incorrect password');
    }
  }
}
