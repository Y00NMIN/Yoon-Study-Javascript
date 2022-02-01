//promise란?
/*
promise(약속)는 자바스크립트에서 제공하는 비동기를 간편하게 처리 할 수 있는 오브젝트 이다.
정해진 장시간의 기능을 수행한 후, 정상적으로 기능이 수행이되었다면 성공의 메시지와 함께 처리된 결과값을 출력한다.
기능을 수행하다 예상치 못한 문제가 발생 했을 때는 에러 결과값을 출력한다.
*/

//Promise is a Javascript object for asynchronous operation.
//promise는 javasscript의 내장 객체이au, 비동기적 행동시 callback함수보다 유용하게 사용 할 수 있는 오브젝트이다.
//promise는 2가지가 가장 중요하다 1.state 2.producer(제공자),consumer(소비자) 견해 이해

//state: pending(operation 수행중) -> fulfilled(operation 성공) or rejected(operation 실패)

//Producer vs Consumer

//1.Producer
//새로운 promise가 만들어 졌을 때, executor 함수가 자동적으로 실행된다.(이를 유의)
//promise는 읽는 속도가 빠르기 때문에 heavy한 일을 많이 한다.(네트워크 통신, 파일 읽기 기능 등을 수행)
const promise = new Promise((resolve, reject) => {
  console.log("doing something...");
  setTimeout(() => {
    resolve("yoon");
    //reject(new Error('no network'));
  }, 2000);
});
/*
사용자가 네트워크 요청을 요구했을때만 사용하려한다면 상단의 코드는 옳지 않다.
상단의 코드는 사용자가 요구하지도 않았는데 불필요한 네트워크 통신이 발생 할 수 있기 때문이다.
promise를 만드는 순간 executor라는 callback함수가 바로 실행되기 때문에 이를 유의해야한다.Promise
*/

//2.Consumers: then, catch, finally
//consumer은 상단의 메소드를 통해 값을 받아 올 수 있다.
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//3.Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); //성공시 1초 뒤, 1출력
});

fetchNumber //
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
//then과 같이 비동기적 애들을 묶어서 사용 할 수 있다.

//4.Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  }); //chicken 함수
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  }); //egg 함수
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  }); //egg cook함수

getHen() //
  .then(getEgg)
  //.then(hen =>getEgg(hen))
  .then(cook)
  //.then(egg=> cook(egg))
  .then(console.log);
//.then(meal=> console.log(meal));

//5. 문제풀이 -> 유튜브 오류처리 부분 마지막 다시 보기
