//objects
//object = {key : value};
//object를 만드는 방법 2가지.

//1.Literals and properties
const obj1 = {}; //1.{}를 이용한 기본적인 object literal
const obj2 = new Object(); //2. new(생성자)를 이용한 object constructor

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const yoon = { name: "yoon", age: 4 };
console.log(yoon);

//자바스크립트는 다이나믹 타입 언어(런타임 중에 스스로 타입을 변환)이기 때문에
//propertie를 나중에 적어도 적용이되는 미친짓을 보여줌
yoon.hasJob = true;
console.log(yoon.hasJob);
delete yoon.hasJob;
console.log(yoon.hasJob);

//2. Computed properties
//properties는 []안에 항상 string type으로 써야한다.
console.log(yoon.name); //정확하게 원하는 값이 있을때는 ( . )을 사용한다.(거의 . 사용)
console.log(yoon["name"]); //정확하게 어떠한 key를 사용할지 모를때 사용
yoon["hasJob"] = true;
console.log(yoon.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(yoon, "name");
printValue(yoon, "age");

//3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("yoon", 23);
console.log(person4);
//person4를 만들때 하단의Person을 통해 만들 수 있다.

//4.Constructor Function
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  //return this;
}

//5. in operator
//property existence check (key in obj)
//obj안에 key가 들어가 있는지 확인
console.log("name" in yoon);
console.log("age" in yoon);

//6. for...in , for....of
//프로젝트때 많이 활용되는 문법
//for(key in obj)
for (key in yoon) {
  console.log(key);
} //yoon 안에있는 key를 모두 확인

//for( value of iterable)
const array = [1, 2, 3, 4];
for (value of array) {
  console.log(value);
}

//7.Fun cloning
//Object.assign(dest,[obj1,obj2,obj3...])
const user = { name: "yoon", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

//other way
const user4 = {};
Object.assign(user4, user); //user값을 user4가 받아온다.
//다른 방식 표현
const user4 = Object.assign({}, user);

//다른 예제
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); //뒤에있는 함수가 앞에를 덮어쓴다.
console.log(mixed.color); //blue
console.log(mixed.size); //big
