// for loops
// ii means increment by one for each iteration
// for(let i = 5 ; i < 50 ; i +=5){
//     if(i === 20){
//         console.log('My favourite number is '+ i);
//         continue;
//     }
//     if(i === 35){
//         console.log('Stop the loop');
//         break;
//     }
//     console.log('Number '+ i);
// }

// while loop

// let a = 0;

// while(a < 10){
//     console.log('Number '+a);
//     a++;
// }

// let i = 2;

// do{
//     console.log('Number '+i);
//     i++;
// }
// while(i < 10);

// How to loop an array
const colors = ['red','blue','green'];

// for (let i = 0 ; i < colors.length ; i++){
//     console.log(colors[i]);
// }

// forEach
colors.forEach(function(color){
    console.log(color);
})