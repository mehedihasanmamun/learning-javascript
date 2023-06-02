// const person1 = {
// firstName : 'Mehedi',
// lastName : 'Mamun',
// email : 'kfvnvkfrn@gmail.com',

// }

// const person2 = {
//     firstName : 'Abu',
//    lastName : 'Sayem',
//      email : 'kfvnvkfrn@gmail.com',
// };

// person2.age = 25;
// person2.id = '1234'

// console.log(person2.email)

// delete person2.age;
// console.log(person1,person2)





// let lecture = 10;
// let section = 3;
// let title = 'Javascript';

// const course = {
//     lecture : 10,
//     section : 3,
//     title : 'Javascript',
//     notes : {
//         introduction : "welcome to Javascript"
//     },
//     enroll(){
//         console.log("You are successfully enrolled");
//     }

// }
 
// console.log(course)



// //array in object

// var student = [
//     {name : 'Mamun', age : 15},
//     {name : 'Sijan', age : 14},
//     {name : 'Alif', age : 13},

// ];
// console.log(student)
 
  
// //storage data
//  function Human(name, age, height, language, country){
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.language = language;
//     this.country = country;
 
//     this.humanInfo = function(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.height);
//         console.log(this.language);
//         console.log(this.country);

//     }
// }

//     var human1 = new Human('Mamun', 24, '5.11', 'Bangla', 'Bangladesh')

 

// // human1.humanInfo();

// let a = {name : 'Mamun', age : 24, Language : 'Bangla'}

// let b = {...a,Country : 'Bangladesh', Id : '235433' };

// console.log(b)






// var student1 = {
//     firstName : "Mamun",
//     lastName : "Mehedi",
//     skills :[
//         'HTML',
//         'CSS',
//         'JavaScript']

// }
// console.log(student1);


// delete student1.lastName;

// student1.Id = "1234"
// student1.age = 25;

// console.log(student1)
// console.log(student1.firstName)
// console.log(student1.skills)

 //Spread operator

//  let a = {name : 'Mamun', age : 24, Language : 'Bangla'}

//  let b = {...a,Country : 'Bangladesh', Id : '235433' };

// console.log(b)

//  let c = a.concat(b)
//  console.log(c)

 
// Creating an array and adding three objects with values 1 to 9


// const  myArray = [
//    { One:1, Two:2, three:3 },

//    { four:4, five:5, six:6 },

//    {seven:7, eight:8, nine:9 },
// ]   
// var index = myArray.findIndex(item => item,5 === 5);
// console.log(index);  // Prints: 1
// console.log(myArray[index],5);

 
//  let key = Object.keys(myArray);
//  console.log('keys ', key);

//  let vals = Object.values(myArray);
//  console.log(vals);


// let enter = Object.entries(myArray);
// console.log(enter);
// console.log(enter[1][1]);


// let object ={

// firstName : 'Mamun',
// lastName : 'Hasan',
// age : 24, 
// birthDay : '1 January'

// }

// let key = Object.keys(object);
// console.log('key', key);

// let vals = Object.values(object);
// console.log('Values', vals)

// let enter = Object.entries(object);
// console.log('Enteries', enter);
// console.log(enter[0][1])
// console.log(enter[1][1])
// console.log(enter[2][1])

// console.log(key.length)


 
  
//    const  myArray = [
//     { id:1, model:2, brand:3 },
 
//     { id:4, model:5, brand:6 },
 
//     {id:7, model:8, brand:9 },
//  ]   
 
//   // Finding index of the car with modal "X5" 
// const searchIndex = myArray.findIndex((car) => car.model==5);

// console.log({myArray,[searchIndex]:5});
// //"Model X5 is present in brand BMW"
    
  
// function getObjectKey(myObj, value) {
//     return Object.keys(myObj).find(key => myObj[key] === value);
//   }
//   const  myObj = 
//          { One:1, 
//             Two:2,
//              three:3 ,
     
//          four:4,
//           five:5,
//            six:6 ,
     
//         seven:7,
//          eight:8,
//           nine:9 }
        
     
   
  
//   console.log(getObjectKey(myObj,5)); 
  

// let arr = [
//     { name:"string 1", value:"this", other: "that" },
//     { name:"string 2", value:"this", other: "that" }
// ];

// let obj = arr.find(o => o.name === 'string 1');

// console.log(obj);



// const carList = [{ id:13, brand: "BMW", model: "X5", price:"$23000", release_date:"2015-10-12"},

//                  { id:9, brand: "Audi", model: "S3", price:"$35000", release_date:"2013-08-23"},

//                  { id:11, brand: "Bugatti", model: "Veyron", price:"$500000", release_date:"2006-02-10"},
                 
//                  { id:7, brand: "VW", model: "Polo", price:"$8000", release_date:"2018-05-03"},
                
//                  { id:4, brand: "Fiat", model: "Punto", price:"$6000", release_date:"2017-01-25"}]


//                  // Finding index of the car with modal "X5" 
// const searchIndex = carList.findIndex((car) => car.model=="X5");

// console.log(`Model X5 is present in brand ${carList[searchIndex].brand}`);
// //"Model X5 is present in brand BMW"

// console.log(`The price of model X5 is ${carList[searchIndex].price}`);
// 


// const myArray = [
//     { One: 1, Two: 2, three: 3 },
//     { four: 4, five: 5, six: 6 },
//     { seven: 7, eight: 8, nine: 9 }
//  ];
 
//  const keyOfFive = Object.entries(myArray.reduce((acc, obj) => ({ ...acc, ...obj }), {}))
//    .find(([key, value]) => value === 5)?.[0];


//    const keyOfNine = Object.entries(myArray.reduce((acc, obj) => ({ ...acc, ...obj }), {}))
//    .find(([key, value]) => value === 9)?.[0];

//    const keyOfTwo = Object.entries(myArray.reduce((acc, obj) => ({ ...acc, ...obj }), {}))
//    .find(([key, value]) => value === 2)?.[0];
 
 
//  console.log(keyOfFive);
//  console.log(keyOfNine);
//  console.log(keyOfTwo);



// const myArray = [
//     { One: 1, Two: 2, three: 3 },
//     { four: 4, five: 5, six: 6 },
//     { seven: 7, eight: 8, nine: 9 }
//  ];
 
//  const keyOfFive = Object.keys(myArray.find(obj => obj.hasOwnProperty("five") && obj.five === 5))[0];
 
//  console.log(keyOfFive);


 



// let num = [32, 34, 35, 36, 39, 41, 42, 43, 44];

// let newNum = num.slice(1, 3);
 
 


// const number3 = [1, 2, 3, 4, 5];

// console.log(number3.slice());
// console.log(number3.slice(0));
// console.log(number3.slice(0, number3.length));
// console.log(number3.slice(1, 5));


// const callback = (n) => {
//     return n ** 2
//   }
//   // function that takes other function as a callback
//   function cube(callback, n) {
//     return callback(n) * n
//   }
//   console.log(cube(callback, 4))


//  let sum = 0;

// const  number = [1, 2, 3, 4, 5]
// number.forEach(num => console.log(num))
// console.log(sum);


// const countries = ['finland', 'denmark', 'sweden', 'norway', 'iceland']
// countries.forEach(element => console.log(element.toUpperCase()))

// console.log(countries);



// Sort 
// let a = [3, 5, 58, 1, 89, 65, 100]

// a.sort (function (a, b) {
//     return a-b;
// })
// console.log(a);

//  const arr = [5, 1, 3, 2, 6];
//  const output = arr.filter((x) => x <3)
//  console.log(output);


//  function ab() {
    
//  }



 
     
     
    // Map
// let arr = [45, 23, 21];
// let a = arr.map((value, index, array) =>{
//     console.log(value,index, array);
//     return value + index ;
// })
// console.log(a);


// Filter
// let arr = [45, 23, 21, 0, 3, 5];
// let a = arr.filter((a) => {
//     return a < 10;
// })

// console.log(a)


// Reduce
// let arr = [1, 2, 3, 5, 2, 1]
// let arr2 = arr.reduce((h1,h2) => {
//     return h1 + h2;
// })
// console.log(arr2);



// Find
// let ages = [10, 23, 19, 20];
// console.log(ages);

// let b = ages.find(checkAdult);
// console.log(b );

// function checkAdult(age) {
//     return age;
// }
// console.log(b)
 

//Find index
// let ages = [10, 23, 19, 20];
 
// console.log(ages);

// let b = ages.findIndex(checkAdult);
// console.log(b );

// function checkAdult(age) {
//     return age >=18;
// }
// console.log(b)




// let b = ages.find((checkAdult) => {
// return checkAdult >= 9;
// })
// console.log(b)


 let ages = [10, 13, 18, 20]

 let a = ages.some((age) => {

    return age >= 18;
 })
 console.log(a)
 




     




