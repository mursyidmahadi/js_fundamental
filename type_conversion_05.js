let val;

// convert number to string
val = String(555);
val = String(4+4);

// Boolean to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3,4]);

// toString()
val = (5).toString();

// String to Number
val = Number('5');

// Boolean to Number
val = Number(true);
val = Number(false);

// Null to Number
val = Number(null);

// String to Number
val = Number('Hello');

console.log(val);
console.log(typeof val);