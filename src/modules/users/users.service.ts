import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { User } from '.prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../auth/dto/register-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) { }

  async getUser(email: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new NotFoundException();
    }
    delete user.password;
    return user;
  }

  async createUser(data: CreateUserDto) {
    const existing = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (existing) {
      throw new ConflictException('username already exists');
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prismaService.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
    delete user.password;
    return user;
  }
}
