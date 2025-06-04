import express from "express";

const app =  express();

app.get("/", (req, res) => {
	res.json({
		message: "Get Endpoint"
	})
})

app.post("/", (req, res) => {
	res.json({
		message: "Post Endpoint"
	})
})

app.listen(3000, () => {
	console.log("Server is running on port 3000");
})