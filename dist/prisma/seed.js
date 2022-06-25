"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const userData = [
    {
        firstName: 'Gabriel',
        lastName: 'Aquino',
        password: '#*ASBXHJKAS8123780bxA801230#!@',
        email: 'alice@prisma.io',
        posts: {
            create: [
                {
                    title: 'Join the Prisma Slack',
                    content: 'https://slack.prisma.io',
                    published: true,
                },
            ],
        },
    },
];
async function main() {
    console.log(`Start seeding ...`);
    for (const u of userData) {
        const user = await prisma.user.create({
            data: u,
        });
        console.log(`Created user with id: ${user.id}`);
    }
    console.log(`Seeding finished.`);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map