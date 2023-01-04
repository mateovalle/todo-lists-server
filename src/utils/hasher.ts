export class Hasher {
  bcrypt = require('bcrypt');
  saltRounds = 10;

  async hash(plainText: string): Promise<string> {
    return await this.bcrypt.hash(plainText, this.saltRounds);
  }

  async compare(plainText: string, hash: string): Promise<boolean> {
    return await this.bcrypt.compare(plainText, hash);
  }
}
