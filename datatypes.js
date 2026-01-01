"use strict" // Treat all JS code as newer version

// alert("hello") // Works inside document (browser)

// Code readability

// let name = "Rhythm"
// let age = 34
// let isLoggedIn = true

// // Primitive
// Number => 2 to 2 power 53
// BigInt
// String
// Boolean
// Null - Standalone Value
// Undefined
// Symbol - Unique


// Object

// console.log(typeof age) // number
// console.log(typeof undefined) // undefined
// console.log(typeof null) // object

// let score = "33"
// console.log(typeof score) // number
// console.log(typeof(score)) // number

let score = "33abc"
let valueInNumber = Number(score)
console.log(score) // 33abc
console.log(valueInNumber) // NaN
console.log(typeof valueInNumber) // number

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0