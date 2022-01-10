//class는 객체를 만드는 공장이다.
class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return "prototype : " + (this.first + this.second);
  }
}
/*
Person.prototype.sum = function () {
  return "prototype : " + (this.first + this.second);
};

바깥에 이 코드를 사용해도 되고 Person class 안에 sum을 사용해도 된다.
class안에서 사용하는게 더 안정성이 높다.
*/

var yoon = new Person("yoon", 10, 20);
yoon.sum = function () {
  return "this:" + (this.first + this.second);
};

console.log("yoon", yoon);
var lee = new Person("lee", 10, 10);
console.log("yoon.sum()", yoon.sum());
console.log("lee.sum()", lee.sum());
//출력 값으로 Person이라는 객체를 생성한다.-> 출력: yoon Person{}

/*하단의 코드를 상단의 class로 묶음
 yoon.sum = function(){
   return 'this : '+(this.first+this.second);
 }
 var lee = new Person('lee', 10, 10);
 console.log("yoon.sum()", yoon.sum());
 console.log("lee.sum()", lee.sum());
 */
