import { SharedModule } from '@shared/shared.module';
import { IUserService, UserService } from '@user/service';
import { IUserRepository, UserRepository } from '@user/repository';
import { UserController } from '@user/controller/user.controller';
import { Module } from '@nestjs/common';
import { Hasher } from '@utils/hasher';
import {Jwt} from "@utils/jwt";

const userServiceProvider = {
  provide: IUserService,
  useClass: UserService,
};

const userRepositoryProvider = {
  provide: IUserRepository,
  useClass: UserRepository,
};

const hasherProvider = {
  provide: Hasher,
  useClass: Hasher,
};

const jwtProvider = {
  provide: Jwt,
  useClass: Jwt,
};

@Module({
  imports: [SharedModule],
  controllers: [UserController],
  providers: [userServiceProvider, userRepositoryProvider, hasherProvider, jwtProvider],
})
export class UserModule {}
