import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import { IUserService } from '@user/service';
import {SignUpDTO} from "@models/user/dto/SignUpDTO";
import {LogInDTO} from "@models/user/dto/LogInDTO";
import {TokenDTO} from "@models/token/TokenDTO";

@Controller('user')
export class UserController {
  constructor(@Inject(IUserService) private readonly userService: IUserService) {}

  @Post('signup')
  async signUp(@Body() signupDTO: SignUpDTO): Promise<void> {
    await this.userService.signUp(signupDTO);
  }

  @Post('login')
  async logIn(@Body() loginDTO: LogInDTO): Promise<TokenDTO> {
    const token = await this.userService.logIn(loginDTO);
    return new TokenDTO(token);
  }

  @Get()
  async getHola(): Promise<string> {
    return 'Hola';
  }
}
