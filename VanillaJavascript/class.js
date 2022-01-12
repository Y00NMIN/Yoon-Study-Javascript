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

class PersonPlus extends Person {
  //extends Person에 의해 Person 안에있는 로직들을 사용 할 수 있다.
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
