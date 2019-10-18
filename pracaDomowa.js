

//zadanie 1 From years in array check for leap years [1974, 1900, 1985, 2000]

// let years = [1974, 1900, 1985, 2000];
// let year;
// for(let i=0; i<years.length; i++){
//     year = years[i];

//     if((year%100===0 || year%4===0) && year%400!==0){
//         console.log(year);
//     }

  



// //zadanie 2 Silnia z 7 

// let silnia = 1*2*3*4*5*6*7 ;
// console.log(silnia);

// let x = 1
// let wynik = 1

// while (x>=1 && x<= 7)
// {
//      wynik = wynik * x;
//     x++;
// };
// console.log(wynik);







// // // Zadanie 3 	Calculate the sum of the odd items 
// let x = [1,6,23,8,4,98,3,7,3,98,4,98];
// let wynik = 0 ;
// for(i=0; i < x.length; i++) 
// {
//     if(x[i]%2===0) {
//         wynik = x[i] + wynik;
        
//     };
    
// };

// console.log(wynik);








// Zadanie 4 	Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.


// let numberArray = [1,6,23,8,4,98,3,7,3,98,4,98];
// let highest = 0
// let lowest = 0
// for (i=0; i < numberArray.length; i++){
//     highest = Math.max(numberArray[i]);
//         lowest = Math.min(numberArray[i]);
// }
// console.log(highest, lowest);
    
// let numberArray = [1,6,23,8,4,98,3,7,3,98,4,98];
// let najwieksza = 0 
// let najmniejsza = 0
// for (i=0; i < numberArray.length; i++) {
//     if(numberArray[i]>najwieksza) {
//         najwieksza = numberArray[i];
        
//     } else {
//         if(numberArray[i]<najmniejsza) {
//             najmniejsza = numberArray[i];
            
//     }; 
// }; 
// };  
//  console.log(najwieksza);
//   console.log(najmniejsza);

    





// Zadanie 5

// Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. 

// let nameArray = ['Karol', 'Adam','Rogowski','Politechnika','Super','Weekend']

// var lgth = 0;
// var longest;

// for(var i=0; i < nameArray.length; i++){
//     if(nameArray[i].length > lgth){
//         var lgth = nameArray[i].length;
//         longest = nameArray[i];
//     }      
// };
// console.log(longest);





//Zadanie 6 Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]


let numberArray = [1,6,23,8,4,98,3,7,3,98,4,98];
let highIndex = 0;

for (i = 0; i < numberArray.length; i++) {

if(highIndex>=numberArray[i]){

highIndex=numberArray[i] }; };

console.log(numberArray[i]);

