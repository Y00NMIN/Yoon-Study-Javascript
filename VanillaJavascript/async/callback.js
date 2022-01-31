//callback 함수란?
//우리가 전달해준 값, 지정해준 요청 값(call)을 너희(브라우저)가 불러와줘(back)
/*
synchronous vs asynchronous
synchronous: 정해진 순서에 맞게 코드가 실행
asynchronous: 비동기적으로 언제 코드가 실행될지 모른다.
*/
//javascript is synchronous(동기적인) 언어이다.

//❗hoisting이된 함수 이후부터 코드가 우리가 작성한 순서에 맞춰 하나씩 동기적으로 실행된다.
//📢hoisting: var, function declaration 등 함수 선언등이 제일 위로 올라가는 것

console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");

//synchronous callback(순차대로 진행되는 콜백)
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

//asynchronous callback(언제 시작되는지 예측될 수 없는 콜백)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
  //요청한 print, timeout을 setTimeout(API)에서 불러온다.
}
printWithDelay(() => console.log("async callback"), 2000);

//❗hoisting으로 인해 선언한 함수는 가장 위에 배치되는 것을 잊지 말자! 중요!

//callback 좋지않은 예시( callback, 안에 callback이 있는 경우)
//2가지의 API가 있다고 가정 (loginUser, getRoles)
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "yoon" && password === "min") ||
        (id === "coder" && password === "yun")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "yoon") {
        onSuccess({ name: "yoon", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
