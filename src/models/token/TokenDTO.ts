import { IsNotEmpty } from 'class-validator';

export class TokenDTO {
  constructor(token) {
    this.token = token;
  }
  @IsNotEmpty()
  token: string;
}
