const person = {
    firstName: 'Sara',
    lastName: 'Smith',
    age: 30,
    email: 'sara@gmail.com',
    address: {
        city: 'Kuala Lumpur',
        country: 'Malaysia'
    },
    courses: ['Cloud','Software']
}

// console.log(person)

let val;
// check specific value
val = person.firstName;
val = person.lastName;
val = person.age;
val = person.email;
val = person.address;
val = person.address.city;
val = person.courses[1];
val = person['lastName'];

const people = [
    {name: 'Sara',age: 30},
    {name: 'John',age: 35},
    {name: 'Kim',age: 36}
]

val = people[0].name;

console.log(val);