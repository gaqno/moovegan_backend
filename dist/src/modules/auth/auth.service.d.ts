import { PrismaService } from 'src/modules/prisma/prisma.service';
import { LoginDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthResponse } from './dto/auth-response.dto';
import { CreateUserDto } from './dto/register-user.dto';
import { UsersService } from 'src/modules/users/users.service';
export declare class AuthService {
    private readonly prismaService;
    private jwtService;
    private readonly usersService;
    constructor(prismaService: PrismaService, jwtService: JwtService, usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<{
        success: string;
    }>;
    login(loginDto: LoginDto): Promise<AuthResponse>;
}
