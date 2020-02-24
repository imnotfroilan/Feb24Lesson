//1. Using object literal

//int x = 8;
let person = {name: "mama q", gender: "female", age: "49"}

console.log(person.age);
console.log(`${person.name} is a ${person.gender} with the age of ${person.age}`);

//2. using factory function
function createPerson(name, gender, age)
{
   let p = {};
   p.name = name;
   p.gender = gender;
   p.age = age;
   return p;
}

let juan = createPerson("juan dela cruz", "male", "69");
console.log(`${juan.name} is a ${juan.gender} and is ${juan.age} years old`)