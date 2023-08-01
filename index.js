/*
1. How do we assign a value to a variable? A. With the assignment operator
2. How do we change the value of a variable?
setting the variable to the current value of the variable plus one
3. How do we assign an existing variable to a new variable?
After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator
4. Remind me, what are declare, assign, and define?
A variable declaration is when you specify a type and an identifier, but have not yet assigned a value to the variable
Assignment is simply the storing of a value to a variable.
A variable definition is when you assign a value to a variable, typically with the assignment operator =
5. What is pseudocoding and why should you do it?
Pseudocode is an informal way of programming description that does not require any strict programming language syntax or underlying technology considerations.
it is easier for people to understand than conventional programming language code
*/

let firstVariable = "Hello World";
console.log(firstVariable);
firstVariable = "743";
console.log(firstVariable);
let secondVariable = firstVariable;
console.log(secondVariable);
secondVariable = "Hello Darkness";
console.log(secondVariable);
console.log(firstVariable);
const yourName = "Courtney";
const greeting = "Hello, my name is " + yourName;
console.log(greeting);

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false);
  console.log(e == 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');

let animal = "cow";
if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}

const personAge = 41;
if (personAge >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

for (let i=0; i <= 10; i++) {
 console.log(i);
}
for (let i = 10; i <= 400; i++) {
 console.log(i);
}
for (let i = 12; i <= 4000; i++) {
  if (i % 3 == 0)
 console.log(i);
}
for (let i = 1; i <= 100; i++) {
 if (i % 2 == 0) {
console.log(i + " is even");   
} else {
   console.log(i);
}
}
for (let i = 0; i <= 100; i++) {
 if (i % 5 == 0) {
console.log(`I found a ${i}. High five!`);   
} if(i % 3 == 0) {
   console.log(`I found a ${i}. Three is a crowd`);
} else {
   console.log(i);
}
}

let bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account += i;
}
console.log(bank_account);

bank_account = 0;
for (let i = 1; i <= 100; i++) {
  bank_account += i * 2;
}
console.log(bank_account);

/*
1. What are the things in an array called?
An array is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key
2. Do Arrays guarantee those things will be in order?
Arrays are ordered collections of values
3. What real-life thing could you model with an array?
Phone contacts
*/

let quotes = ["If it keeps up, man will atrophy all his limbs but the push-button finger.", "It has become appallingly obvious that our technology has exceeded our humanity.", "Technology is a useful servant but a dangerous master."]

const randomThings = [1, 10, "Hello", true]
randomThings.splice(2, "World");
console.log(randomThings);

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const thirdElement = ourClass[2];
console.log(thirdElement);
ourClass[4] = "Octocat";
console.log(ourClass);
ourClass.push("Cloud City");
console.log(ourClass);

const myArray = [5, 10, 500, 20]
myArray.push("Aegon", "Jon Snow");
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift("Bob Marley");
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(myArray);
/* The Array is mutated. Mutated means to change permanently. Yes there was a return.*/

let integer = 743;
if (integer < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

if (integer < 5) {
  console.log("little number");
} else if (integer > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
]

const thirdItem = kristynsCloset[3];
console.log("Kristyn is rocking that " + `${thirdItem}` + " today!");
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);
kristynsCloset.splice(5, 1, "stained knit hat");
console.log(kristynsCloset);
const firstItem = thomsCloset[0][0];
console.log(firstItem);
const secondItem = thomsCloset[1][1];
console.log(secondItem);
const thirdAcc = thomsCloset[2][2];
console.log(thirdAcc);
console.log("Thom is looking fierce in a " + `${firstItem}` + ", " + `${secondItem}`  + ", and " + `${thirdAcc}` + "!");
thomsCloset[1].splice(2, 1, "Footie Pajamas");
console.log(thomsCloset);

function printGreeting(name) {
  const greeting = `Hello there, ${name}!`;
  return greeting;
}
console.log(printGreeting("Slimer"));

function printCool(name) {
  console.log(name + " is cool.");
}
printCool("Captain Obvious");

function calculateCube(sideLength) {
  const volume = sideLength ** 3;
  console.log(`The volume of a cube with side length ${sideLength} is: ${volume}`);
}

calculateCube(5);

function isVowel(character) {
  const lowerCaseChar = character.toLowerCase();
  return lowerCaseChar === 'a' || lowerCaseChar === 'e' || lowerCaseChar === 'i' || lowerCaseChar === 'o' || lowerCaseChar === 'u';
}

console.log(isVowel('a')); 
console.log(isVowel('A')); 
console.log(isVowel('e')); 
console.log(isVowel('E')); 
console.log(isVowel('i')); 
console.log(isVowel('I')); 
console.log(isVowel('o')); 
console.log(isVowel('O')); 
console.log(isVowel('u')); 
console.log(isVowel('U')); 

console.log(isVowel('b')); 
console.log(isVowel('C')); 
console.log(isVowel('x')); 
console.log(isVowel('Y')); 

function getTwoLengths(string1, string2) {
  const lengths = [string1.length, string2.length];
  return lengths;
}

const answer = getTwoLengths("hello", "world");
console.log(answer); 

function getMultipleLengths(strArray) {
  const lengths = strArray.map(str => str.length);
  return lengths;
}

const words = ["hola", "adios", "ciao", "arrivederci"];
const solution = getMultipleLengths(words);
console.log(solution);

function maxOfThree(numb1, numb2, numb3) {
  if (numb1 >= numb2 && numb1 >= numb3) {
    return numb1;
  } else if (numb2 >= numb1 && numb2 >= numb3) {
    return numb2;
  } else {
    return numb3;
  }
}

console.log(maxOfThree(6, 3, 93)); 
console.log(maxOfThree(4, 7, 24)); 
console.log(maxOfThree(72, 72, 72));

function printLongestWord(wordsArray) {
  if (wordsArray.length === 0) {
    return null; 
  }

  let longestWord = wordsArray[0]; 

  for (let i = 1; i < wordsArray.length; i++) {
    const currentWord = wordsArray[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord; 
    }
  }

  return longestWord;
}

const wordStrings = ["apple", "banana", "orange", "pineapple"];
console.log(printLongestWord(wordStrings));
const words2 = ["run", "hide", "seek"];
console.log(printLongestWord(words2));
const words3 = ["yellow", "blue", "red"];
console.log(printLongestWord(words3)); 
const emptyArray = [];
console.log(printLongestWord(emptyArray)); 

const user = {
  name: "Lisa",
  email: "Lisa.Jane@blahblahblah.com",
  age: 41,
  purchased: []
};

console.log(user);

const updated = {
  ...user,
  email: "new.email@blahblahblah.com"
};

console.log(updated);

const updatedUser = {
  ...updated,
  location: "Brooklyn"
};

console.log(updatedUser);

const carbUser = {
  ...updatedUser,
  purchased: [...updatedUser.purchased, "carbohydrates"]
};

console.log(carbUser);

const peaceUser = {
  ...carbUser,
  purchased: [...carbUser.purchased, "Peace of Mind"]
};

console.log(peaceUser);

const woolUser = {
  ...peaceUser,
  purchased: [...peaceUser.purchased, "Merino jodhpurs"]
};

console.log(woolUser);

// const purchasedItem = woolUser.purchased.pop();
// console.log(purchasedItem);

console.log(woolUser.purchased.slice(-1));
 
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "Queens",
    purchased: []
}

console.log(user.friend.name);
console.log(user.friend.location);

user.friend.age = 55;
console.log(user.friend.age);

const uU = {
  ...user.friend,
  purchased: [...user.friend.purchased, "The One Ring"]
};
console.log(uU);

const purchase = {
  ...uU,
  purchased: [...uU.purchased, "A Latte"]
};
console.log(purchase);

console.log(purchase.purchased[1]);

for (let i = 0; i < woolUser.purchased.length; i++) {
  console.log(woolUser.purchased[i]);
}

for (let i = 0; i < purchase.purchased.length; i++) {
  console.log(purchase.purchased[i]);
}

function updateUser() {
  user.age++; 
  user.name = user.name.toUpperCase(); 
}

updateUser();

console.log(user);

function oldAndLoud(person) {
  person.age++; 
  person.name = person.name.toUpperCase(); 
}
oldAndLoud(user);
console.log(user);










