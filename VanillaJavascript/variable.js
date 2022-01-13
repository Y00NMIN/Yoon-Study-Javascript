"use strict";

//mutable data type, immutable data type 비교 글작성

//variable, rw(read/write)
//let
//DataType (mutable)
let globalName = "yoon";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(globalName);

//const, r(read)
//DataType(immutable)
const firstName = "min";
const secondName = "yoon";

//Datatype
//variable type
//primitive(값 자체가 메모리에 바로 저장)
//object(레퍼런스를 통해서 실제로 오브젝트가 담겨있는 메모리를 가르킨다.)오브젝트 안에있는 값들은 변경이 가능하다

//number
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count} `);
console.log(`value: ${size}, type: ${typeof size} `);

//string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting} `);
const helloBob = `hi ${brendan}`; //template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob} `);

//boolean
//true: any other value
//false: 0, null, undefined, NaN, ``
const canRead = true;
const test = 3 < 1;

//null
//선언이 안되었다.
let noting = null;
console.log(`value: ${noting}, type: ${typeof noting} `);

//undefined
//선언은 되었지만 값은 비어있음
let x;
console.log(`value: ${x}, type: ${typeof x} `);

//symbol
//고유한 식별자를 만들때 사용
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
//예시: 주어진 string에 맞는 symbol을 만들어줘
console.log(symbol1 === symbol2); //true

//object
const yoon = { name: "yoon", age: 23 };
yoon.age = 21; //변수 yoon 안에 있는 age만 변경하고 싶을때 이렇게 작성하면된다.

//Dynamic typing: dynamically typed language
//javascript는  dynamically typed language라 불린다.
//즉, 변수를 선언할때 타입을 지정하지 않고 런타임때 할당된 값에 따라 타입이 변경될 수 있다.
let text = "hello";
console.log(`value: ${text}, type: ${typeof text} `);
text = 1;
console.log(`value: ${text}, type: ${typeof text} `);
text = "7" + 1;
console.log(`value: ${text}, type: ${typeof text} `); //string으로 인식
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text} `); //number로 인식
//이렇듯 javascript는 런타임때 변수의 타입을 지정하기 때문에 error가 나는 경우가 있다.
