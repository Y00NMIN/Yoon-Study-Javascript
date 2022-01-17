"use strict";
//자료구조는 비슷한 종류의 요소들을 모아서 분류한 것을 의미한다.
//오브젝트는 서로 연관된 특징과 행동들을 묶어둔것이라 생각하면되고 이러한 오브젝트들을 묶어 둔것을 자료구조라한다.
//Type이 있는 언어에서는 동일한 type의 데이터만 담을 수 있다.
//자바스크립트는 타입이 동적으로 정의하기 때문에 한 자료구조에 여러 타입을 담을 수 있다.(그러나 그러지 않는다.)

//배열은 칸칸히 촘촘히 박스가 모여있는 자료구조를 의미한다. 배열의 포인트는 각 칸(박스, 메모리)에 인덱스 값이 지정 되어 있다.(인덱스가 핵심)
//index는 0부터시작한다.(Base 0)

//Array
//1. Declaration(선언)
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ["🍌", "🍎"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
//배열의 마지막 값을 찾을 때는
console.log(fruits[fruits.length - 1]);

console.clear();

//3.Looping over(반복) an array
//print all fruit;
// a방법 for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//b방법 for of
for (let fruit of fruits) {
  console.log(fruit);
}

//c방법 forEach
//forEach는 배열안에 들어있는 value들마다 내가 전달한 함수를 출력한다는 의미
fruits.forEach((fruit) => console.log(fruit));

//4. Addtion, deletion, copy
// push: 아이템을 배열의 끝자리에 두고 싶다.(add)
fruits.push("🍓", "🍈");
console.log(fruits);

// pop: 배열의 끝에서부터 아이템을 제거하고 싶다.(delete)
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: 앞에서부터 data(아이템)을 추가
fruits.unshift("🍉", "🍈");
console.log(fruits);

// shift: 앞에서부터 data(아이템)을 삭제
fruits.shift();
fruits.shift();
console.log(fruits);

//shift와 unshift는 pop과 push보다 매우 느리다.
/*그 이유는 배열을 shift나 unshift와 같이 메모리를 동적으로 움직이는 명령어는 배열의 전체가 움직이기 때문에
배열의 size가 커질수록 움직여야하는 데이터 값이 많아지기 때문에 속도가 느려 질 수 밖에 없다*/
/*때문에 pop과 push와 같은 명령어를 사용하는 이유는 데이터는 가장 뒤에서 접근한다면 추가하거나 삭제하는 데이터를 제외하고
나머지 데이터들은 그대로 있기에 매우 빠르고, 만약 중간에 값들을 변경하고자 할때는 
index를 이용해 중간 데이터를 보다 손쉽게 변경하고 유지보수 할 수 있다.*/

//splice: data(아이템)를 index position을 이용해 제거한다.
fruits.push("🥝", "🍇", "🍑");
console.log(fruits);
//fruits.splice(1,1);//index 1부터 그 뒤에 1개 data를 삭제해라
console.log(fruits);
fruits.splice(1, 1, "🍊", "🥕"); // index 1부터 그 뒤에 1개 data를 삭제하고 그 자리에 뒤 string값을 추가하라
console.log(fruits);

//conbine two arrays : 2가지의 배열을 묶어서 만들 수 있다.
const fruits2 = ["🍒", "🍐"];
const newFruits = fruits.concat(fruits2);
console.log("new:" + newFruits);

//5. Searching
//indexOf : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🥝")); //배열안에 키위의 index position
console.log(fruits.indexOf("🍑"));
console.log(fruits.indexOf("🥥")); //코코넛은 배열안에 없기 때문에 -1로 출력된다.

//includes
console.log(fruits.includes("🍑"));

console.log(fruits.includes("🥥")); //배열안에 코코넛이 있는가? false

//lastindexof
console.clear();
fruits.push("🍑");
console.log(fruits.indexOf("🍑")); //같은 종류의 string이 있다면 indexof는 가장 앞에 index을 출력
console.log(fruits.lastIndexOf("🍑")); //같은 종류의 string이 있다면 indexof는 마지막에 index을 출력
