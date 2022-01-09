//class는 객체를 만드는 공장이다.
class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
}

var yoon = new Person("yoon", 10, 20);
console.log("yoon", yoon);
//출력 값으로 Person이라는 객체를 생성한다.-> 출력: yoon Person{}

/*하단의 코드를 상단의 class로 묶음
 yoon.sum = function(){
   return 'this : '+(this.first+this.second);
 }
 var lee = new Person('lee', 10, 10);
 console.log("yoon.sum()", yoon.sum());
 console.log("lee.sum()", lee.sum());
 */
