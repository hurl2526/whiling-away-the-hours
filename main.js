function addChallengeBanner (num){
  console.log('######### '+'Challenge ' + num + ' #########')
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
  let add = 0;
  while (num2 > add){
    add = add + 1;
    console.log(add)
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
  let counter = 0
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

function number8 (num){
  let something = num;
  while (something > 0) {
    console.log(something);
    something = something - 3;
  }
  }
number8(20);
addChallengeBanner(9);
addChallengeBanner(10);
