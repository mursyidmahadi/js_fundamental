// 1. function declaration
function greeting(firstName = 'John',lastName = 'Doe'){
    // if(typeof firstName === 'undefined')(firstName='Kim')
    // if(typeof lastName === 'undefined')(lastName='Don')

        return 'Hello '+firstName+' '+lastName;
}


function welcome(){
    console.log('Welcome to Airasia Academy');
}

// console.log(greeting('Sara','Smith'));
// welcome();

// 2. function expression
const square = function(x){
    return x*x;
}
console.log(square(3));

const sqr = function(x=3){
    console.log(x*x);
}
sqr();

// IIFE
// immediately invokable function expression
(function(){
    console.log('Hello from IIfes..');
})();

(function(userName='John'){
    console.log('Welcome' + userName);
})('Kim');

// Function as property method
const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit : function(){
        console.log('Edit todo...');
    }
}

todo.delete = function(){
    console.log('delete todo');
}

todo.add();
todo.edit();
todo.delete();

console.log (todo);