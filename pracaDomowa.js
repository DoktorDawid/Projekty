

//zadanie 1 From years in array check for leap years [1974, 1900, 1985, 2000]

let years = [1974, 1900, 1985, 2000];
let year;
for(let i=0; i<years.length; i++){
    year = years[i];

    if((year%100===0 || year%4===0) && year%400!==0){
        console.log(year);
    }

  



// //zadanie 2 Silnia z 7 

// let silnia = 1*2*3*4*5*6*7 ;
// console.log(silnia);

let x = 1
let wynik = 1

while (x>=1 && x<= 7)
{
     wynik = wynik * x;
    x++;
};
console.log(wynik);







// // // Zadanie 3 	Calculate the sum of the odd items 
  
  
let x = [1,6,23,8,4,98,3,7,3,98,4,98];
let wynik = 0 ;
for(i=0; i < x.length; i++) 
{
    if(x[i]%2!=0) {
        wynik = x[i] + wynik;
        
    };
    
};

console.log(wynik);








// Zadanie 4 	Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.


// let numberArray = [1,6,23,8,4,98,3,7,3,98,4,98];
// let highest = 0
// let lowest = 0
// for (i=0; i < numberArray.length; i++){
//     highest = Math.max(numberArray[i]);
//         lowest = Math.min(numberArray[i]);
// }
// console.log(highest, lowest);
    
let numberArray = [1,6,23,8,4,98,3,7,3,98,4,98];
let najwieksza = 0 
let najmniejsza = 0
for (i=0; i < numberArray.length; i++) {
    if(numberArray[i]>najwieksza) {
        najwieksza = numberArray[i];
        
    } else {
        if(numberArray[i]<najmniejsza) {
            najmniejsza = numberArray[i];
            
    }; 
}; 
};  
 console.log(najwieksza);
  console.log(najmniejsza);

    





// Zadanie 5

// Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. 

let nameArray = ['Karol', 'Adam','Rogowski','Politechnika','Super','Weekend']

var lgth = 0;
var longest;

for(var i=0; i < nameArray.length; i++){
    if(nameArray[i].length > lgth){
        var lgth = nameArray[i].length;
        longest = nameArray[i];
    }      
};
console.log(longest);





//Zadanie 6 Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]


let numberArray = [1,6,23,8,4,98,3,7,3,98,4,98];
let highIndex = 0;

for (i = 0; i < numberArray.length; i++) {

if(highIndex>=numberArray[i]){

highIndex=numberArray[i] }; };

console.log(numberArray[i]);

  
  
  

// Zadanie 7 	Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]


                // ZROBIONE
let numberArray = [1,6,23,8,4,98,3,7,3,98,4,98];
let avarageValue = 0
let evenNumbers = 0
let number = 0


for ( i= 0; i < numberArray.length; i++) {

    if(numberArray[i]%2===0) {
            evenNumbers = numberArray[i] + evenNumbers;
                avarageValue = evenNumbers/(number +=1);
             };


}

console.log( "Średnia wartość liczb to", avarageValue);




//Zadanie 8 	Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

                        // ZROBIONE 
let arr = [1,6,23,8,4,98,3,7,3,98,4,98];
let sum = 0;
let leng = arr.length;
let number = 0;

for (i = 2; i < leng ; i+=2) {
    if(i%2===0) {
        sum = arr[i] + sum;
        number+=1;
    };
};
console.log(sum/number);




//Zadanie 9 	With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]


let arr = [1,6,23,8,4,98,3,7,3,98,4,98]; 
let addSum = 0;


for (i = 0; i < arr.length ; i++) {
    if (arr[i]%2===0) {
    addSum = addSum + arr[i]; 
     } else {
        addSum = addSum - arr[i];
    };
};
 
console.log(addSum);


