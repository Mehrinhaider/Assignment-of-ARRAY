"use strict";
//                                  /ARRAY/////
//Q#1 create an array named fruits that contain the following string elements
//"apple",'banana","mango","orange".........
Object.defineProperty(exports, "__esModule", { value: true });
let fruit = ["apple", "Mango", "banana", "orange"];
console.log(fruit);
//                  XXXXXXXXXXXXXXXXXXXXXXX
//Q#2 Declare an array named numbers that can contain only number elements and initialize it with the 
//values 10,20,30,and 40.......
let numbers = [10, 20, 30, 40];
console.log(numbers);
//                   XXXXXXXXXXXXXXXXXXXXXX
//Q3 access the third element of the fruit array and assign into a varaible named 
//fruits...
let fruits = ["apple", "banana", 'mango', "orange"];
console.log(fruits[2]);
//                   XXXXXXXXXXXXXXXXXXXXXXX
//Q4 change the second element of the numbers Array 20
let numbers1 = [10, 20, 30, 40];
console.log(numbers1[1]);
//                    XXXXXXXXXXXXXXXXXXXXXXX
//Q5 add the element grapes to the end of the fruits Array using the method..
let fruits1 = ["apple", 'mango', "banana", "orange"];
fruits.push("grapes");
console.log(fruits1);
//                  XXXXXXXXXXXXXXXXXXXXXXX
//Q6 Remove the last element from the fruits Array using the method and assign it to avariable named lastfruit 
let lastfruits = ["apple", "banana", "mango", "orange", "grapes"];
lastfruits.pop();
console.log(lastfruits);
//                      XXXXXXXXXXXXXXXXXXXX
//Q7 Remove the first element from the fruits ARRAY using the method and assingn it to a variable 
//named firstfruit
let firstfruit = ["apple", "banana", "mango", "orrange"];
firstfruit.shift();
console.log(firstfruit);
//                    XXXXXXXXXXXXXXXXXXX
//Q8 add the element "kiwi" to the begining of the fruits ARRAR using the method .
let fruits2 = ["apple", "banana", "mango", "orange"];
fruits.unshift("kiwi");
console.log(fruits2);
//                    XXXXXXXXXXXXXXXXXXXX
//Q9 Remove to elements from the fruits ARRAY starting from index1 using the method.
let fruit3 = ["apple", "bnana", "mango", "orange"];
fruits.splice(1, 2);
console.log(fruit3);
//                      XXXXXXXXXXXXXXXXXXXXX
//Q10 IN set the element "pineapple" and "pear" add index to of the fruits ARRAY 
//using the method..... 
let fruitSS = ["apple", "mango", "banana", "orange"];
fruits.splice(2, 0, "pineapple", "pear");
console.log(fruitSS);
//                       XXXXXXXXXXXXXXXXXXXX
//Q11 Create a new ARRAY named citrusfruit that contains the first twolet citrusfr element 
//of the fruits ARRAAY using the method..
let citrusfruit = fruits.splice(0, 1);
console.log(citrusfruit);
//                         XXXXXXXXXXXXXXXXXXXX
//Q12  Create a new ARRAY named lastTwoFruits that contain the last two elements of
//the fruits ARRAY using the method....
let lastTwoFruits = fruits.splice(2, 3);
console.log(lastTwoFruits);
//                          XXXXXXXXXXXXXXXXXXXXXXX
