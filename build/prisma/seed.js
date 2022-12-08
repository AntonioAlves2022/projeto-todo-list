"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seed() {
    const user = await prisma.user.create({
        data: {
            name: "Antonio Alves",
            email: "antonio.alves@google.com",
            Task: {
                create: {
                    title: "Estudar Javascript",
                    "description": "Estudar javascript e resolver uma lista de exercicios"
                }
            }
        }
    });
    await prisma.user.create({
        data: {
            name: "Emenergildo Eustáquio Gomes Filho",
            email: "gildao.surfista11@hotm"
        }
    });
}
seed();
