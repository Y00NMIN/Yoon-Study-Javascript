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
