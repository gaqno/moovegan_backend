import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-user.dto';
import { User } from '.prisma/client';
import { CreateUserDto } from './dto/register-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(login: LoginDto): Promise<import("./dto/auth-response.dto").AuthResponse>;
    register(createUserDto: CreateUserDto): Promise<{
        success: string;
    }>;
    getLoggedUser(user: User): User;
}
