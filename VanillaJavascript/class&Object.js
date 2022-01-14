"use strict";
//class: template(붕어빵 틀)
//objcet:instance of a class(붕어빵(크림,피자,팥 등)종류)

//1. Class declarations(선언)
class Person {
  //constructor(생성자)
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods(행동)
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const yoon = new Person("yoon", 23);
console.log(yoon.name);
console.log(yoon.age);
yoon.speak();

//2.Getter and setters(초기 설정)
class user {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  //getter
  //this.age의 값을 메모리에 저장하지 않고 바로 get에 설정
  get age() {
    return this._age;
  }
  //setter
  //=age;의 값을 메모리에 저장하지 않고 바로 set에 설정
  set age(value) {
    //if(value<0){
    //  throw Error('age can not be negative');
    //}
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new user("Steve", "job", -1);
console.log(user1.age);

/*
//3. Fields(public,private)
class Experiment{
  publicField = 2;
  //그대로 사용하면 publicField
  #privateField = 0;
  //해시(#)를 넣으면 privateField
}
const experiment = Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
//출력 undefined 그 이유는 privatefield인데 클래스 외에서 사용하였기 때문
최신 문법이기 때문에 BABEL을 사용해야함. 아직 쓰기에는 이름
*/

/*
//4. static properties and methods
class Article{
  static publisher = "Yoon coding";
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printPublisher(){
    console.log(Article.publisher);
  }
}
Typescript에서 많이 사용
*/

//5.Inheritance(상속)과 다양성
class Shape {
  //fields
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  //methods
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  //methods
  getArea() {
    return this.width * this.height;
  }
}
//Rectangle에 Shape이 가진 속성을 extends(상속)
class Rectangle extends Shape {}
//필요한 함수들만 수정이 가능하다.
class Triangle extends Shape {
  draw() {
    super.draw();
    //super을 통해 부모 methods를 가져와 사용할수있다.
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "blue");
triangle.draw();
console.log(triangle.getArea());

//6.Class checking: instanceOf
//instanceof 왼쪽 에 objct가 오른쪽에있는 class의 instance인지 아닌지 확인 (true/false)
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(rectangle instanceof Object); //true javascript의 모든 class는 Object를 상속하기 때문
