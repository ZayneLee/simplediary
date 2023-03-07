// // 객체 리터럴 방식으로 객체 생성
// const person = {
//   name: "Zayne", // 객체 프로퍼티
//   gender: "male",
// };

// // 점 표기법으로 객체 프로퍼티에 접근
// console.log(person.name);

// // 괄호 표기법으로 객체 프로퍼티에 접근
// // 괄호 표기법으로 접근시에는 키 값을 문자 형태로 전달
// console.log(person["gender"]);

// function getPropertyValue(key) {
//   return person[key];
// }

// // 동적인 파라미터를 받는 상황에서는 괄호 표기법을 통해 객체 프로퍼티에 접근할 수 있다.
// console.log(getPropertyValue("name")); // Zayne

// // 객체 프로퍼티 추가
// person.location = "Korea";
// person["age"] = 33;
// console.log(person); //{name: 'Zayne', gender: 'male', location: 'Korea', age: 33}

// // 객체 프로퍼티 수정
// person.location = "UK";
// person["age"] = 30;
// console.log(person); // {name: 'Zayne', gender: 'male', location: 'UK', age: 30}

// // person 객체가 const 로 선언되었음에도 프로퍼티 추가 및 수정이 가능

// // 객체 프로퍼티 삭제
// delete person.age;
// delete person["location"];
// console.log(person); //{name: 'Zayne', gender: 'male'}

// // 객체 프로퍼티 확인
// console.log(`name : ${"name" in person}`); // true

// // // 배열 리터럴로 배열 생성
// // let arr = [1, 2, 3, 4, 5];

// // // 인덱스로 배열의 요소에 접근
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);
// // console.log(arr[4]);

// // // 배열 요소 추가
// // arr.push(6);
// // arr.push({ key: "value" });
// // arr.push(function a() {});

// // console.log(arr);

// // // 배열의 길이
// // console.log(arr.length);

// // 객체 키를 배열 형태로 반환
// const personKeys = Object.keys(person);

// console.log(personKeys);
// // ['name', 'gender']

// for (let i = 0; i < personKeys.length; i++) {
//   const curKey = personKeys[i];
//   const curValue = person[curKey];

//   console.log(`${curKey} : ${curValue}`);
// }

// // name : Zayne
// // gender : male

// // 객체 값을 배열 형태로 반환
// const personValues = Object.values(person);
// for (let i = 0; i < personValues.length; i++) {
//   console.log(personValues[i]);
// }

// const arr = [1, 2, 3, 4];

// // forEach
// // 화살표 함수
// arr.forEach((elm) => console.log(elm));
// // 함수 표현식
// arr.forEach(function (elm) {
//   console.log(elm);
// });

// // 실행결과 1,2,3,4

// // map
// // 배열의 모든 요소에 순차적으로 접근하여 함수의 몸체 부분을 수행한 후 새로운 배열로 반환
// const newArr = arr.map((elm) => elm * 2);

// console.log(newArr); // 실행결과 [2,4,6,8]

// // includes
// // 배열의 요소와 전달 받은 인자가 일치하는 지를 확인하여 true / false 반환

// let number = 3;
// console.log(arr.includes(number)); // 실행결과 true

// // indexOf
// // 전달 받은 인자가 배열의 요소 몇번째에 위치하는 지 확인하여 인덱스 번호 반환 / 일치하는 값이 없으면 -1 반환

// console.log(arr.indexOf(number)); // 실행결과 2

// // findIndex
// // 객체를 포함한 배열에서 조건에 일치하는 값의 인덱스를 반환 / 일치하는 값이 없으면 -1 반환

// const arr1 = [
//   { color: "red" },
//   { color: "black" },
//   { color: "blue" },
//   { color: "yellow" },
// ];
// // findIndex 는 콜백 함수를 전달해주어야 한다.
// console.log(arr1.findIndex((elm) => elm.color === "red")); // 0

// // find
// // 조건에 일치하는 요소를 반환

// const element = arr1.find((elm) => elm.color === "blue");

// console.log(element); // {color: 'blue'}

// const arr2 = [
//   { id: 1, color: "red" },
//   { id: 2, color: "black" },
//   { id: 3, color: "blue" },
//   { id: 4, color: "yellow" },
//   { id: 5, color: "blue" },
// ];

// // filter
// // 조건에 일치하는 모든 요소를 배열로 반환

// console.log(arr2.filter((elm) => elm.color === "blue")); // [{ id: 3, color: "blue" }, { id: 5, color: "blue" }]

// // slice
// // 배열의 요소를 원하는 크기만큼 반환

// console.log(arr2.slice(0, 2)); // [{ id: 1, color: "red" }, { id: 2, color: "black" }]

// // concat
// // 배열 합치기

// const a = [1, 2, 3];
// const b = [4, 5];

// console.log(a.concat(b)); // [1, 2, 3, 4, 5]

// // sort
// // 배열 정렬

// let numbers = [4, 1, 6, 22, 10, 5, 13];

// // 원본 배열을 정렬
// // 문자열 기준으로 정렬
// numbers.sort();

// console.log(numbers); // [1, 10, 13, 22, 4, 5, 6]

// const compare = (a, b) => {
//   if (a > b) {
//     // 크다
//     return 1;
//   }

//   if (a < b) {
//     // 작다
//     return -1;
//   }
//   // 같다
//   return 0;
// };

// numbers.sort(compare);
// console.log(numbers); // [1, 4, 5, 6, 10, 13, 22]

// // join
// // 배열의 문자열 합치기

// const arr3 = ["Hello", "World", "Zayne", "Lee"];
// console.log(arr3.join(" ")); // Hello World Zayne Lee
// // 전달 받은 인자는 구분자 역할

// 단락회로 평가
// 왼쪽에서 오른쪽으로 연산하게 되는 논리 연산자의 연산 순서를 이용한 문법

// console.log(false && true);

// // AND 연산자에서 왼쪽이 false 이면 오른쪽 값은 무시되며 연산을 끝내버리는 것을 단락회로 평가

// console.log(true || fasle);
// OR 연산자에서는 왼쪽이 true 이면 오른쪽 값은 읽지 않고 연산이 끝나버린다.

// const getName = (person) => {
//   if (!person) {
//     return "객체가 아닙니다.";
//   }
//   return person.name;
// };

// 단락회로 평가 응용
// const getName = (person) => {
//   const name = person && person.name;
//   return name || "객체가 아닙니다.";
// };

// let personA;
// const a = getName(personA);
// console.log(a); // 실행결과 : 객체가 아닙니다.

// let personB = { name: "Zayne" };
// const b = getName(PersonB);
// console.log(b); // 실행결과 : Zayne

// function isCountry(country) {
//   if (country === "USA" || country === "UK") {
//     return true;
//   } else {
//     return false;
//   }
// }
// 배열 내장 함수를 활용한 조건문 업그레이드
function isCountry(country) {
  if (["USA", "UK"].includes(country)) {
    return true;
  } else {
    return false;
  }
}

const a = isCountry("USA");
const b = isCountry("Korea");

console.log(a);
console.log(b);

// 객체 괄호표기법을 활용한 조건문 업그레이드

const getMeal = (mealType) => {
  if (mealType === "한식") return "불고기";
  if (mealType === "중식") return "짜장면";
  if (mealType === "일식") return "초밥";
  if (mealType === "양식") return "파스타";
  return "굶기";
};

const meal = {
  한식: "불고기",
  중식: "짜장면",
  일식: "초밥",
  양식: "파스타",
};

const getMeal = (mealType) => {
  return meal[mealType] || "굶기";
};

console.log(getMeal("한식"));
console.log(getMeal());
