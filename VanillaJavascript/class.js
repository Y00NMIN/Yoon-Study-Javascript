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
//avg기능을 사용하기위해 새로운 class를 만들었다.
//하지만 중복되는 sum,constructor부분을 제거하고자할때 필요한 기능이 상속이다.
class PersonPlus {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return "prototype : " + (this.first + this.second);
  }
  avg() {
    return (this.first + this.second) / 2;
  }
}

var yoon = new PersonPlus("yoon", 10, 20);
yoon.sum = function () {
  return "this:" + (this.first + this.second);
};
console.log("yoon.sum()", yoon.sum());
console.log("yoon.avg()", yoon.avg());
