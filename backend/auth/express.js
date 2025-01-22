// const express = require("express");
// const bodyParser = require("body-parser");
// const port = 3000;

// const app = express();
// app.use(express.json());

// let users = [];

// const generateToken = () => {
//   let options = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     0,
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//   ];

//   let token = "";
//   for (let i = 0; i < 32; i++) {
//     token += options[Math.floor(Math.random() * options.length)];
//   }
//   return token;
// };

// app.post("/signingUp", (req, res) => {
//   const { username, password } = req.body;

//   if (users.find((u) => u.username === username)) {
//     return res.json({
//       message: "The user already exists!",
//     });
//   }

//   users.push({
//     username: username,
//     password: password,
//   });

//   res.json({
//     message: "Signed Up",
//   });
// });

// app.post("/signIn", (req, res) => {
//   const { username, password } = req.body;

//   let foundUser = users.find(
//     (user) => user.username === username && user.password === password
//   );

//   if (foundUser) {
//     let token = generateToken();
//     foundUser.token = token;

//     res.json({
//       message: `Signed in successfully! Your token: ${token}`,
//     });
//   } else {
//     res.json({
//       message: "The user does not exist or incorrect credentials",
//     });
//   }
// });

// app.get("/me", (req, res) => {
//   const token = req.headers.authorization;

//   const user = users.find((u) => u.token === token);

//   if (user) {
//     res.send({
//       username: username,
//     });
//   } else {
//     res.status(401).json({
//       error: "The user does not exist ",
//     });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

var twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};
console.log(twoSum([3, 2, 4, 5, 1, 6, 0], 6));
