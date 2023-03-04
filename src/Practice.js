// 객체 리터럴 방식으로 객체 생성
const person = {
  name: "Zayne", // 객체 프로퍼티
  gender: "male",
};

// 점 표기법으로 객체 프로퍼티에 접근
console.log(person.name);

// 괄호 표기법으로 객체 프로퍼티에 접근
// 괄호 표기법으로 접근시에는 키 값을 문자 형태로 전달
console.log(person["gender"]);

function getPropertyValue(key) {
  return person[key];
}

// 동적인 파라미터를 받는 상황에서는 괄호 표기법을 통해 객체 프로퍼티에 접근할 수 있다.
console.log(getPropertyValue("name")); // Zayne

// 객체 프로퍼티 추가
person.location = "Korea";
person["age"] = 33;
console.log(person); //{name: 'Zayne', gender: 'male', location: 'Korea', age: 33}

// 객체 프로퍼티 수정
person.location = "UK";
person["age"] = 30;
console.log(person); // {name: 'Zayne', gender: 'male', location: 'UK', age: 30}

// person 객체가 const 로 선언되었음에도 프로퍼티 추가 및 수정이 가능

// 객체 프로퍼티 삭제
delete person.age;
delete person["location"];
console.log(person); //{name: 'Zayne', gender: 'male'}

// 객체 프로퍼티 확인
console.log(`name : ${"name" in person}`); // true

// 배열 리터럴로 배열 생성
let arr = [1, 2, 3, 4, 5];

// 인덱스로 배열의 요소에 접근
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// 배열 요소 추가
arr.push(6);
arr.push({ key: "value" });
arr.push(function a() {});

console.log(arr);

// 배열의 길이
console(arr.length);
