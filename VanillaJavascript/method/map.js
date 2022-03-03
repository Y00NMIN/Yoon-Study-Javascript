const array = [1, 2, 3];
const result = [];
//1.Use to for
for (let i = 0; i < array.length; i++) {
  result.push(array[i] * 2);
}
console.log("for", result);

//2.Use to map
// const result2 = array.map(()callback 함수 =>{});
const result2 = array.map((value) => {
  return value * 2;
});
console.log("value1", result2);
//and
const result3 = array.map((value) => value * 2);
console.log("value2", result3);

//3. index Access
const result4 = array.map((value, index) => index * 2);
console.log("index", result4);

//4. Object Access
const items = [
  { id: 1, name: "yoon" },
  { id: 2, name: "min" },
  { id: 3, name: "coder" }
];
const resultItem = items.map((item) => {
  return { id: item.id };
});
console.log("obecjt", resultItem);

//other
const result5 = array.map((v) => {
  if (v % 2) {
    return "홀수";
  }
  return "짝수";
});
console.log(result5);

//map을 실행하는 배열과 결과로 나오는 배열이 다른 객체라는 것입니다. 기존 배열을 수정하지 않고 새로운 배열을 만들어냅니다.
//단, 배열 안에 객체가 들어있는 경우, 객체는 공유됩니다
