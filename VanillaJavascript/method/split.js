//split
//string.split(separator, limit)
/*
split() 함수는, 문자열을 'separator'로 잘라서,
'limit' 크기 이하의 배열에 잘라진 문자열을 저장하여 리턴합니다.

-separator
필수 아님,문자열을 잘라 줄 구분자 (문자열 또는 정규식),값이 입력되지 않으면 문자열 전체를 배열에 담아서 리턴합니다.
-limit
필수 아님,최대 분할 갯수
*/

const splitStr = "yoonmin study javascript ES6";
const splitArr = splitStr.split();
console.log(splitArr);
console.log(splitArr.length);

const splitArr2 = splitStr.split("");
console.log(splitArr2);
console.log(splitArr2.length);

const splitArr3 = splitStr.split(" ");
console.log(splitArr3);
console.log(splitArr3.length);

//--------------------------------------------
const splitStr2 = "yoonmin,study,javscript,ES6";
const splitArr4 = splitStr2.split(",");
console.log(splitArr4);
console.log(splitArr4.length);
console.log(splitArr4[0]);
console.log(splitArr4[3]);

const splitArr5 = splitStr2.split(",", 2); //Setting limit
console.log(splitArr5.length);
console.log(splitArr5[0]);
console.log(splitArr5[1]);
console.log(splitArr5[2]);
