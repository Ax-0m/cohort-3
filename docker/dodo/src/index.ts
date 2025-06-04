import express from "express";
import { PrismaClient } from "../prisma/generated/prisma";

const app =  express();
const prismaClient = new PrismaClient();
app.get("/", async (req, res) => {
	const users = await prismaClient.user.findMany()

	res.json({
		users
	})
})

app.post("/", async (req, res) => {

	await prismaClient.user.create({
		data: {
			username: "Test",
			password: "123456"
		}
	})

	res.json({
		message: "Signed up"
	})
})

app.listen(3000, () => {
	console.log("Server is running on port 3000");
})