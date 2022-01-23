// Q1. make a string out of an array
const fruits = ["apple", "banana", "orange"];
const result = fruits.join(" - ");
console.log(result);

// Q2. make an array out of a string
const fruit = "🍎, 🥝, 🍌, 🍒";
const result2 = fruit.split(" , ");
console.log(result2);

// Q3. make this array look like this: [5, 4, 3, 2, 1]
const array = [1, 2, 3, 4, 5];
const result3 = array.reverse();
console.log(result3);
console.log(array); //array 순서도 동일하게 변경되어었다

// Q4. make new array without the first two elements
const array2 = [1, 2, 3, 4, 5];
const result4 = array.slice(2, 5); //index start 2부터 5(n-1)까지 출력

const array = class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
};
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88)
];
//callback 함수 student를 사용하였다
// Q5. find a student with the score 90
  const result5 = students.find(function(Student) => student.score ===90);
  console.log(result5);
 /*
 const result5 = students.find(function(student){
   return student.score === 90;
 });
 */

// Q6. make an array of enrolled students
 const result6 = students.filter((student) => student.enrolled);
 console.log(result6)

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
 const result7 = students.map((student) => student.score);
 console.log(result7);

// Q8. check if there is a student with the score lower than 50
 const result8 = students.some((student) => student.score < 50);
 console.log(result8);

 const result9 = !students.every((student) => student.score >= 50);
console.log(result9);

// Q9. compute students' average score
 const result9 = students.reduce((prev, curr)=>{
    console.log("----")
    console.log(pre);
    console.log(curr);
    return prev + curr.score;
 }, 0);
 //reduce는 우리가 원하는 시작점부터 모든 배열을 돌면서 어떠한 값을 누적할때 사용한다.

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
const result10 = students.map((student -> student.score).join();
console.log(result10);

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
const result 11 = students.map((student =>student.score).sort((a,b) =>a-b).join();