//1.Object to JSON(object를 JSON으로 변환)
//stringify(문자열화)(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const cat = {
  name: "kiki",
  color: "grey",
  size: null,
  birthDate: new Date(),
  symbol: Symbol("id"),
  //symbol와 같이 Javascript에서 자체에 들어가있는 데이터도 포함이 안된다.
  jump: () => {
    console.log(`${name} can jump!`);
  }
  //jump는 출력이 안된다. 그 이유는 함수는 object 안에 있는 데이터가 아니기 때문이다.
};

json = JSON.stringify(cat);
console.log(json);

json = JSON.stringify(cat, ["name", "size"]);
console.log(json);

json = JSON.stringify(cat, (key, value) => {
  //console.log(`key: ${key}, value: ${value}`);
  return value;
});
console.log(json);

//2.JSON to Object(JSON을 object로 변환)
//parse(시간을 의미하는 문자열을 해석해서 밀리세컨드로 return)(json)
console.clear();

json = JSON.stringify(cat);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
cat.jump();
//obj.jump(); json으로 변환되는 과정에서 함수 jump는 사라지기 때문에 obj.jump는 실행시 오류를 발생하게된다.

console.log(cat.birthDate.getDate());
console.log(obj.birthDate); //json으로 넘어간 obj의 birthDate는 string값이기 때문에 getDate()메소드 입력시 에러 발생
