export class Jwt {
  jwt = require('jsonwebtoken');

  login(userId: string): string {
    return this.jwt.sign({ _id: userId }, 'secretiveness', {
      expiresIn: 60 * 60 * 24, // 24 hours
    });
  }
}
