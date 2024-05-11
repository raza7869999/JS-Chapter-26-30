//Q:1
//a
let number =(3.45214);
console.log(number)
//b
let roundVN = Math.round(2.9);
console.log(roundVN)
//c
let floorVN = Math.floor(3.9);
console.log(floorVN)
//e
let ceilVN = Math.ceil(3.6);
console.log( ceilVN )

//Q:2
//a
let Number =(-2.673);
console.log(Number)
//b
let RoundVN = Math.round(-2.9);
console.log(RoundVN)
//C
let FloorVN = Math.floor(-2.7);
console.log(FloorVN)
//E
let CeilVN = Math.ceil(-2.9);
console.log( CeilVN )

//Q:3
function difference(a, b) {
    return Math.abs(a - b);
  }
  
  console.log(difference(-4, 4));
  console.log(difference(5, 5));

  //Q:4
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(9));
  
  //Q:5
  const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

//Q:6
var heads = 1;
var tails = 2;
function click() {  
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
        flip("heads");
    }else{
        flip("tails");
    }
};
function flip(coin) {
    document.getElementById("result").innerHTML = coin;
}

//Q:7



