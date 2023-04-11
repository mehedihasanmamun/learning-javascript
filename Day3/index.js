//undefined
let firstName 
console.log(firstName)

//null

let empty = null
console.log(empty);

//Airthmetic operators


let numOne = 4;
let numtwo = 3;
let sum = numOne + numtwo;
let sub = numOne - numtwo;
let mult = numOne* numtwo;
let div = numOne / numtwo;
let remainder = numOne % numtwo;
let powerOf = numOne ** numtwo;

console.log(sum, sub, mult, div, remainder, powerOf);


const PI = 3.14;
let radius = 100 ;          
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle)  ;

const gravity = 9.81;
let mass = 72;
const weight = gravity * mass;
console.log(weight);

const boilingPoint = 100;
const bodyTemp = 37;

const waterTemp = boilingPoint * bodyTemp;

console.log(waterTemp);



const boiling_Point = 100 
const body_Temp = 37 
console.log(`The boiling point of water is ${boiling_Point} oC.\nHuman body temperature is ${body_Temp} oC.\nThe gravity of earth is ${gravity} m / s2.`
  )



  let string = 'Javascript'
  console.log(string.substr(4,6))





 

 let string5 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string5.search(/love/))          
console.log(string5.search(/javascript/gi))  





let account = 0;
let count = 0;
count--;
console.log('1st log =>', account, count);
account = --count;
console.log('2nd log =>', account,count);
account = --count;
console.log('3rd log =>', account, count);



let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false


 

let number = prompt('Enter number', 'number goes here')
console.log(number)
 
const agree = confirm("Are you want to delete");
console.log(agree);


var date = new Date();
console.log(date);

var year = date.getFullYear();
console.log(year);

var month = date.getMonth();
console.log(month);

var currentDate = date.getDate();
console.log(currentDate);

var currentDay = date.getDay();
console.log(currentDay);

var currentMinute = date.getMinutes();
console.log(currentMinute);

var currentsecond = date.getSeconds();
console.log(currentsecond);

  


 const now = new Date()
 const years = now.getFullYear()
 const months = now.getMonth() + 1
 const dates = now.getDate()
 const hours = now.getHours()
 const minutes = now.getMinutes()

 console.log(`${dates}/${months}/${years} ${hours}:${minutes}`)




