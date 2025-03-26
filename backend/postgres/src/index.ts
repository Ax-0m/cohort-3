import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser() {
    await client.user.create({
        data: {
            username: "Prakhar",
            password: "123456",
            age: 19
        }
    })
    console.log("User created successfully");
}

createUser();