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

let n=5, count = 1;
let star = "";
for(let row=0;row<n;row++){
  for(let col=0;col<=row;col++){
    star  += count;
    star += " ";
    count++ ;
  }
  star += "\n";
}
console.log(star);

 