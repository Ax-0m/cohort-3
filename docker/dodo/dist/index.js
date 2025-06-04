"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.json({
        message: "Get Endpoint"
    });
});
app.post("/", (req, res) => {
    res.json({
        message: "Post Endpoint"
    });
});
app.listen(3000, () => {
    console.log("Server is running on port 30010");
});
