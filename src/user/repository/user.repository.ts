import { Injectable } from '@nestjs/common';
import { IUserRepository } from '@user/repository/user.repository.interface';
import { PrismaClient } from '@prisma/client';
import { User } from '@models/user/entities';

@Injectable()
export class UserRepository implements IUserRepository {
  private prisma = new PrismaClient();
  private model = 'user';
  async create(username: string, hashedPassword: string): Promise<void> {
    await this.prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });
  }

  async getByUsername(username: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });
  }
}
