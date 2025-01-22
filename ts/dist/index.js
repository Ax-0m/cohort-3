"use strict";
function Helloworld(name) {
    console.log("hello ", name);
    return name;
}
function sum(a, b) {
    return a + b;
}
function age(age) {
    return (age < 18 ? false : true);
}
function callback(fn) {
    setTimeout(fn, 1000);
}
function hello() {
    console.log('hello world');
}
callback(hello);
