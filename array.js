// // Array - מערכים
// let arr = [15, 32, 45]
// console.log(arr);
// console.log(arr[3]);
// console.log(arr.length);
// let fruits = ["apple", "banana", 15, "11"]
// let apple = fruits[0];
// console.log(apple);



// // לולאות
// // While

// let arr = [15, 32, 45]
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i = i + 1;
// }

// console.log("Finish While loop");


// // For
// i = i + 1;
// i++

// let arr = [15, 32, 45]


// for(let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i == 4) {
//         break;
//     }
// }

// for(let i = 0; i < 10; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);
// }

// console.log("Finish for loop");


// let fruits = ["apple", "banana", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//     if(fruits[i] === "banana") {
//         console.log("We Have Bananas");
//         break
//     }
//     console.log(fruits[i]);
// }





// Objects אופבייקטים

let fruits = ["apple", "banana", "orange"];

let person = {
    name: "John",
    age: 40,
    country: "Israel",
    sayHello: () => console.log("Hello"),
};

// person.sayHello();

// console.log(typeof []);

// console.log(person);

// console.log(person.name);

// console.log(person["name"]);

// for (const iterator of fruits) {
//     console.log(iterator);
// }

// for (const key in person) {
//     if (key == "name" || key == "age") {
//         console.log(person[key]);
//     }
// }

// for (const key in person) {
//     console.log(person[key]);
// }



// let arr = [23, 45, 88];
// const arr = [23, 45, 88];

console.log(arr);

// מוסיף ערך
// arr.push(65);

// מוחק את הערך האחרון
// arr.pop();

console.log(arr);

//איזה מספר ערך נמצא
// let index = arr.indexOf(88)
// console.log(index);

// תין לי ערך אם הוא קיים אני נותן נכון אם לא לא נכון
// console.log(arr.includes(23));


//
const arr = [23, 45, 88];







// function isEElementInArry(el, arr) {
//     return arr.includes(el)
// }
// console.log(isEElementInArry(23, arr));