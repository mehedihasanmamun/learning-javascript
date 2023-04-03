let firstName = 'Mehedi';
let lastName = 'Mamun';
let age = 25;


let fullName = firstName  +     lastName;

console.log(`My name is ${fullName}. I am ${age}.`)

let js = 'javascript';
console.log(js.length);

let firstName1 = 'Mehedi Hasan Mamun'
console.log(firstName1.length);

let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers) 

let userOne = {
name:'Mamun',
role:'learner',
country:'Bangladesh'
}

let userTwo = {
name:'Mamun',
role:'learner',
country:'Bangladesh'
}

console.log(userOne == userTwo) ;


//Declaring Number Data Types
let age = 35
const gravity = 9.81  
let mass = 72         
const PI = 3.14    

// More Examples
const boilingPoint = 100  
const bodyTemp = 37       

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);



//Math object

console.log(Math.round(9.81))
console.log(Math.floor(2.56))
console.log(Math.floor(2.40))
console.log(Math.min(-5, 3, 20, 4, 5, 10))
console.log(Math.max(-5, 3, 20, 4, 5, 10)
 const randNum = Math.random()
console.log(randNum)

const num = Math.floor(Math.random () * 11) 
console.log(num)
console.log(Math.sqrt(100))     

console.log(Math.sqrt(2))       

// Power
console.log(Math.pow(3, 2))     

console.log(Math.E) 

Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

//Concatenating Using Addition Operator
let space = ' '
let firstName = 'Mamun'
let lastName = 'Mehedi'
let country = 'Bangladesh'
let city = 'Rangpur'
let language = 'JavaScript'
let job = 'Freelancer'
let age = 250


let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne);


const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)


console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

//Template Literals (Template Strings)

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)


//String Methods
let js = 'JavaScript'
console.log(js.length)         
let firstName = 'Asabeneh'
console.log(firstName.length)



let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           

let secondLetter = string[1]       
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            

let lastIndex = string.length - 1

console.log(lastIndex)  
console.log(string[lastIndex])


let string = 'JavaScript'

console.log(string.toUpperCase())     

let firstName = 'Asabeneh'

console.log(firstName.toUpperCase())  

let country = 'Finland'

console.log(country.toUpperCase()) 



let string = 'JavasCript'

console.log(string.toLowerCase())     

let firstName = 'Asabeneh'

console.log(firstName.toLowerCase())  

let country = 'Finland'

console.log(country.toLowerCase())




let string = 'JavaScript'
console.log(string.substr(4,6))   

let country = 'Finland'
console.log(country.substr(3, 4))
            

let string = 'JavaScript'

console.log(string.substring(0,4))     
console.log(string.substring(4,10))    
console.log(string.substring(4))       

let country = 'Finland'

console.log(country.substring(0, 3))   
console.log(country.substring(3, 7))   


let string = '30 Days Of JavaScript'

console.log(string.split())     
console.log(string.split(' '))  

let firstName = 'Asabeneh'

console.log(firstName.split())   
console.log(firstName.split(''))  

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(',')) 
console.log(countries.split(', '))
console.log(country.substring(3))



let string = '   30 Days Of JavaScript   '

console.log(string)
console.log(string.trim(' '))

let firstName = ' Asabeneh '

console.log(firstName)
console.log(firstName.trim());



let num = '15'
let numInt = parseInt(num)
console.log(numInt) 
let num = '15'
let numInt = Number(num)

console.log(numInt) 
let num = '15'
let numInt = +num

console.log(numInt) 
