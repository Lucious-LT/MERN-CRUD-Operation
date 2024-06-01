// Q: Sort the array as per the rules of card game using generic method.
// var cards = ['Jack', 8, 2, 6, 'King', 5, 3, 'Queen']
// <!-- Requried Output = [2,3,5,6,8,'Jack','Queen','King']
// Q: Sort the array as per the rules of card game using generic method.
// Choose language of your choice.
// Sample output is attached.
// The code test is based on the rules of Deck card game. Just like we assign numbers to the strings and arrange the strings and integers in ascending order, we need to assign the lowest number to Jack and highest number to King. Queen comes in between. So if you arrange them in ascending order the required output will be [2,3,5,6,8,'Jack','Queen','King'].
// While writing the code, you need to make sure that the solution is written in Generic method and not hardcoded. To test that, you need to add 2 more Jacks, 2 more Queens and 2 more Kings. Hence, your output should have the same number of Jacks, Queens and Kings.
// You also need to make sure that your code should have just 1 loop. It shouldn't have more than 1 loop. It will disqualified your code.


//Q:






//  I am using Javascript

function sortCards(array){
  let n= array.length;
  for(let i=1; i<n; i++){
   
 
    return array.sort((a,b)=>{
      if(a==='Jack'){
        a=2;
      }
      if(a==='Queen'){
        a=3;
      }
      if(a==='King'){
        a=5;
      }
      if(b==='Jack'){
        b=8;
      }
      if(b==='Queen'){
        b=3;
      }
      if(b==='King'){
        b=6;
      }
      return a-b;
    })

}
}
console.log(sortCards(['Jack', 8, 2, 6, 'King', 5, 3, 'Queen']))




