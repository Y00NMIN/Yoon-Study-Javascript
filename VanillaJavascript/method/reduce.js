//[출처]제로초
const array = [1, 2, 3];
/*How to use reduce?
array.reduce((누적값, 현재값, 인덱스, 요소) => {
  return 결과;
}, 초기값);
이전값이 아니라 누적값이라는 것에 주의, 누적값이기 때문에 다양한 활용이 가능하다.
*/
//덧셈 예시
//1. 초기 값 == 0
result = array.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0);
//누적 현 index
// 0 1 0
// 1 2 1
// 3 3 2
console.log("1:" + result); // 6

//초기값 없을때
result = array.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
});
// 1 2 1
// 3 3 2
console.log("2:" + result); // 6

// reduce, push 활용
result = array.reduce((acc, cur) => {
  acc.push(cur % 2 ? "홀수" : "짝수");
  return acc;
}, []);
console.log("3:" + result); // ['홀수', '짝수', '홀수']

//reduceRight
//reduceRight는 reduce와 동작은 같지만 요소 순회를 오른쪽에서부터 왼쪽으로 한다는 점이 차이입니다.
result = array.reduceRight((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0);
// 0 3 2
// 3 2 1
// 5 1 0
console.log("4:" + result); // 6
