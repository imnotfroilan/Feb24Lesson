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


//3. using object creation using constructor function 
function Person (name, gender, age)
{
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let mina = new Person("Mina Sharon Myoui", "female", "22");

document.write(`${mina.name} is a ${mina.gender} and is ${mina.age} years old`);

//4. oject creation using ES6 syntax
class Persona
{
    constructor(name, gender, age)
    {
        this.name =name;
        this.gender = gender;
        this.age = age;
    }

    walk(distance)
    {
        console.log(`${this.name} is able to walk to ${distance} miles...`)
    }
}

let jisas = new Persona ("Mina Myoui", "female", 22);
jisas.walk(5);


//5. prototypes
function Student(name, section, course)
{
    this.name = name;
    this.section = section;
    this.course = course;
}

let student1 = new Student ("Froylen Lem", "2ITB", 20);
let student2 = new Student ("Demonyo", "2ITF", 20);

Student.prototype.school = "UST";
Student.prototype.study = function (subject)
{
    console.log(`${student1.name} is studying ${subject}`)
}

console.log(`${student1.name} from ${student1.section} went to ${student1.school} in order to get killed by ${student2.name} from ${student2.section}`)

student1.study("ICS2609");


//6 CALL METHOD
let stud1 = {name: "granny boi"};

let stud2 = {name: "demonyo", course: "Ghosting", section: "2ITF"};

info = ["2ITB","IT"];

let displayInfo = function()
{
    document.write(`<h2>${this.name}, ${this.course} is enrolled in section ${this.section}</h2>`);
}

displayInfo.call(stud2);
displayInfo.apply(stud1, info);

//7 BIND METHOD

let tao1 = {fname: "Jeff", lname = "Dimagiba"};
let tao2 = {fname: "Junmar", lname = "Tigasin"};

let fullname = function ()
{
    return this.fname + " " + this.lname;

}

let x = fullname.bind(tao1);
console.log(x());