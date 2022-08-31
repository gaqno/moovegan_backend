import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AppLoggerModule } from './appLogger.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UsersModule, PrismaModule, AuthModule, AppLoggerModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
