//1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

//2. 객체의 구조 분해 할당
let person = {
  name: "최유경",
  age: 21,
  hobby: "필라테스",
};
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;
let { name, age, hobby, extra = "Hello" } = person; // 객체는 중괄호{}
console.log(name, age, hobby, extra);

//3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => { //중괄호로 구조분해할당임을 명시해줘야함
  console.log(name, age, hobby, extra);
}
func(person); //객체를 넘겼기 때문에 구조분해할당이 가능함

