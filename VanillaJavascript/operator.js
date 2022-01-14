//1. string concatenation (문자열 연쇄)
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 +2 = ${1 + 2}`);

console.log("toon's book");
//'을 나타내고 싶으면 '앞에\을 붙여줘야함,
//또한 문자열 줄바꿈은 \n을 넣으면되고 tab은 \t이다.

//2. numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

//3. increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//위 ++counter은 아래 코드는 같은 말이다.
//counter = counter  + 1;
//preIncrement = counter
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1 ;

//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x= x+ y;
x -= y;
x *= y;
x /= y;

//5. comparsion operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. Logical operators : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

//||(or)
//값중에 하나만 true여도 true값이 나온다.
console.log(`or:${value1 || value2 || check()}`);
function check() {
  console.log("nice work");
}
/* 
값중 하나만 true면 true이니 value값들에서 true가 나온다면
함수를 사용할 일이 없어진다. 즉, 함수는은 제일 뒤에배치되도록 작성해야한다.
*/

//&&(and)
//값중에 하나만 false여도 false값이 나온다.
console.log(`or:${value1 || value2 || check()}`);
/* 
값중 하나만 false면 false이니 value값들에서 false가 나온다면
함수를 사용할 일이 없어진다. 즉,함수는 제일 뒤에 배치되도록 작성해야한다.
*/

//and는 간단한 null 체크에도 많이 사용된다.
if (nullavleObjct != null) {
  nullableObject.something;
}

//!(not)
//결과 값의 반대 값을 출력

//7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality(type을 변경해서 검사한다.), with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality(type을 신경써서 검사한다.), with type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//8. Conditional operators
//if,else if, else
const name = "yoon";
if (name === "yoon") {
  console.log("Welcome,Ellie!");
} else if (name === "coder") {
  console.log("you are amazing code");
} else {
  console.log("unkwnon");
}

//9.Ternart operator: ?
//condition ? value1 : value2;
console.log(name === "yoon" ? "yes" : "no");
//name 이 true이면 yes를 출력하고 아니면 no를 출력해라

//10. Switch statement
//해당하는 case에 도달하면 break
//chrom과 firefox는 출력 값이 I love you로 동일 할때 연속으로 사용하면된다.
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away");
    break;
  case "Chrom":
  case "Firefox":
    console.log("I love you");
    break;
  default:
    console.log("sae all!");
    break;
}

//11.Loops
//while loop, while the condition is truthy
let i = 3;
while (i > 0) {
  console.log(`while:${i}`);
  i--;
}

//do while loop, body code is executed first
//먼저 함수를 실행한 다음에 조건이 맞는지 안맞는지를 검사하고 출력
do {
  console.log(`do while:${i}`);
  i--;
} while (i > 0);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //let지역변수 선언
  console.log(`inline variable for: ${i}`);
}

//nested loops
//for문안에for을 실행하면 i를 0~9까지 실행하고 하단의 for에서 0~9까지 실행
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i:${i}, j:${j}`);
  }
} //이렇게 작성하는것은 cpu에 무리가가니 작성안하는게 좋다

//break 멈추는 것
for (i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
}
//continue 다음것부터 실행하는 것
for (i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
}
