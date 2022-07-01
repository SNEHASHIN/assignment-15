//Que no ................3
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let n=5, count = 1;
// let star = "";
// for(let row=0;row<n;row++){
//   for(let col=0;col<=row;col++){
//     star  += count;
//     star += " ";
//     count++ ;
//   }
//   star += "\n";
// }
// console.log(star);

// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5
// 0
// 1 1
// 2 3 5
// 8 13 21 34
// 55 89 144 233 377


// let a=0;
// let b=1;
// for(row=a;row<=5;row++){
//   let stars = '';
//   for(col=1;col<=row;col++){
//      stars +=' ';
//     let c=a+b;
//     stars+=`${a}`;
//     a=b;
//     b=c;
    
//   }
//   console.log(stars);
// }

// Que no 1
//Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5
// *              *
//    *       *
//        *
//    *       *
// *              *

let n=5;
for(let row=1;row<=5;row++){
  let stars='';
  for(let col=1;col<=5;col++){
   if(row==col || (row+col==6)){
    stars += '  *  ';
   }
   else{
    stars += '     ';
   }
  }
  console.log(stars);
  
}

