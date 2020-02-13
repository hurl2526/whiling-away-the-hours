function addChallengeBanner (num){
  console.log('######### '+'Challenge ' + num + ' #########')
  // couldve written (`###### Challenge ${num} #####`)
}
addChallengeBanner(1);
function fiveThings(){
let num = 1;
while (num <=5) {
  console.log(num);
  num=num + 1;
}
}
fiveThings();

addChallengeBanner(2);

function stopHere(num2){
  let num = 1;
  while (num <= num2){
    num ++;
    console.log(num)
  }
}
stopHere(6)
addChallengeBanner(3);

function inclusive(num1, num2){
  let counter = num1
  while (counter<= num2){
    console.log(counter);
    counter = counter + 1
  }
}
inclusive(3,6)
addChallengeBanner(4);

function evenOrOdd(num){
  let counter = 1
while (num > counter){
  if (counter % 2 === 0){
  console.log(counter + ' Even')
  }
  else if (counter % 2 === 1){
    console.log(counter + ' Odd')
  }
counter = counter + 1;
}
}
evenOrOdd(6);
addChallengeBanner(5);

function evenOnly(num){
  let counter = 0
while (num > counter){
  if (counter % 2 === 0){
  console.log(counter)
  }
counter = counter + 1;
}
}
evenOnly(11)

addChallengeBanner(6);

function tenThings(){
  let num = 10;
  while (num >= 1) {
    console.log(num);
    num = num - 1;
  }
  }

  tenThings();

addChallengeBanner(7);

function bOff(){
  let num = 10;
  while (num >= 0) { 
    if (num === 0){
  console.log('Blast off!')
}else{
    console.log(num);
}
  num = num - 1;
}
} 
  bOff();
addChallengeBanner(8);

// function number8 (num){
//   let something = num;
//   while (something > 0) {
//     console.log(something);
//     something = something - 3;
//   }
//   }
function number8 (num){
  while (num > 0) {
    console.log(num);
    num = num - 3;
  }
  }
number8(20);
addChallengeBanner(9);

function helloPlus (){
  let num = 1;
  while (num <=7) {
    console.log(num +'.'+ 'Hello!');
    num=num + 1;
  }
  } 
helloPlus();
addChallengeBanner(10);

function myString (words){
  let num = 1;
  while (num <=7) {
    console.log(num + '.' + ' ' + words);
    num=num + 1;
  }
  } 
  myString('This is hard')

addChallengeBanner(11);


function weird(string, num){
  let num2 = 1
  while (num2 <= num){
    console.log(string)
    num2= num2 + 1
  }
}
weird('Good-bye', 4);

addChallengeBanner(12);
letter = 0;
function individual(string){
  while(letter < string.length){
  console.log(string[letter]);
  letter = letter + 1;
  }
}
individual('think');
addChallengeBanner(13);

function everyOther(string){
  let num13 = 1;
  while(num13 < string.length){
  console.log(string[num13]);
  num13 = num13 + 2;
  }
}
everyOther('Nobody');

addChallengeBanner(14);

function backString(string){
  num14 = string.length -1;
  while(num14 > -1){
  console.log(string[num14]);
  num14 = num14 - 1;
  }
}
backString('backwards');

addChallengeBanner(15);

function fizzy(num2){
  let stuff = 0;
  while (num2 > stuff){
    stuff = stuff + 1;
    if (stuff % 3 === 0 && stuff % 5 === 0){
      console.log('FizzBuzz')}
      else if (stuff % 3 === 0){
        console.log('Fizz')
      }
      else if (stuff % 5 === 0){
        console.log('Buzz')
      }else {
        console.log(stuff)
      }
}
}
fizzy(15);
addChallengeBanner(16);

// function fibonacci (num)

