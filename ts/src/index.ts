// function Helloworld(name : string) : string {
//     console.log("hello ", name);
//     return name;
// }

// function sum(a: number, b: number) : number {
//     return a + b;
// }

// function age(age: number) : boolean {
//     return (age < 18 ? false : true);
// }

// function callback(fn: () => void) {
//     setTimeout(fn, 1000);
// }

// function hello() {
//     console.log('hello world');
// }

// callback(hello);

// interface and types, to make something optional we add a ? before the column

// interface Page {
//     name: string,
//     age: number,
//     address?: {
//         city: string,
//         country: string,
//         pincode: number
//     }
// };

// let user: Page = {
//     name: "prakhar",
//     age: 18,
//     address: {
//         city: "banagore",
//         country: "india",
//         pincode: 560064
//     }
// }

// let user2: Page = {
//     name: "prakhar",
//     age: 18,
// }

interface User {
    name: string,
    age: number,
    id: string,
    email: string,
    password: string
}

type admin = Pick<User, "name" | 'email' | 'password'> // i already have an interface ready and i want some properties for a new interface isiliye we use PICK and this becomes a type

// partial --- all properties beecome optional, this shit lowkey good

type optionalAdmin = Partial<admin>