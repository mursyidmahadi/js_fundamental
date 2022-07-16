const firstName = 'Sara';
const lastName = 'Smith';
const age = 30;
const text = 'Welcome to CSS'
const topics = 'web design, digital marketing, cyber security'


let val;

// Concat
val = firstName + lastName;
val = firstName + " " + lastName;

// append

val = 'Naghmed ';
val += 'Muhammadi';

val = 'Hello my name is '+firstName+' and my last name is '+lastName;

// Escaping

// val = 'That\'s awesome',I can\'t wait';

// Length
val = firstName.length;

// Concat
val = firstName.concat(' '+lastName);

// Change case
val = firstName.toLowerCase();
val = firstName.toUpperCase();

// indexOf
val = firstName.indexOf('a');
val = firstName.lastIndexOf('a');

// charAt()
val = firstName.charAt('2');

// Get last Character
val = firstName.charAt(firstName.length -1);

// replace
val = text.replace('css' ,'javascript');

// slice
val = firstName.slice(1,3);

// split
val = topics.split(',')

// include
val = text.includes('welcome');

console.log(val);