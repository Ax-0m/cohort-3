import prisma from "db/client";
import express from "express";

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
    prisma.user.findMany()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({error: err.message});
        })
})

app.post("/users", (req, res) => {
    const {username, password} = req.body;

    if (!username || !password) {
        res.status(400).json({error: "Username and password are required"});
        return;
    }

    prisma.user.create({
        data: {
            username,
            password
        }
    })
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json({error: err.message});
        })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})