import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/modules/prisma/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    validate(payload: {
        email: string;
    }): Promise<import(".prisma/client").User>;
}
export {};
