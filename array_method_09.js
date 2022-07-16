// Create array
const numbers = [34,85,99,77,12,3,90,-100];
const colors = ['pink','green','blue','silver'];
const numbers2 = new Array(22,33,44,55);
const mixed = [22,'Hello',null,undefined,true,[1,2,3],{a:1,b:2},new Date]

let val;

// Get array link
// val = numbers.length;

// Check is it is array
// val = Array.isArray(numbers2);

// Get single value
// val = numbers[3];
// val = numbers[6];

// Insert value to an array
// numbers[2]=250;

// find the index number
// val = numbers.indexOf(90);

// manipulate an array
// add value to end of array
// numbers.push(500);
// add value to the beginning of an array
// numbers.unshift(300);
// remove value from end of an array
// numbers.pop();
// remove the value from the beginning
// numbers.shift();
// split
// numbers.splice(1,4);
// reverse
// numbers2.reverse();

// concat array
// val = numbers2.concat(colors);

// sort an array
val = numbers.sort();

// compare function
val = numbers.sort(function(a,b){
    return a-b;
});

val = numbers.sort(function(a,b){
    return b-a;
});

// find
function over90(num){
    return num>90;
}

val = numbers.find(over90);

console.log(val);