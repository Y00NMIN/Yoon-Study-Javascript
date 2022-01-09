//JavaScript OOP의 특징은 ES6이상의 브라우저에서만 동작하는게 큰 특징이다.
//생성자 person과 prototype(원형) 해당 내용은 블로그에 있습니다.

function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function () {
  return "prototype : " + (this.first + this.second);
};

var yoon = new Person("yoon", 10, 20);
yoon.sum = function () {
  return "this:" + (this.first + this.second);
};
var lee = new Person("lee", 15, 25);
console.log("yoon.sum()", yoon.sum());
console.log("lee.sum()", lee.sum());

/*
Person이란 함수 앞에 new를 붙이면 객체를 return한다.
이때 객체가 return되기 전에 Person함수 안에있는 코드로 인해서 객체의 속성이 기본적으로 setting이된다.

즉, new를 사용한 Person은 생성자 constructer가된다.

constructer이 하는 일은 2가지이다.
1. 객체를 만든다.
2. 그 객체의 초기 상태를 setting한다.
*/
