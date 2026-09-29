// 2.3) 구조 분해 할당
// 1. 배열의 구조 분해 할당

// 배열에 있는 원소들을 일일이 할당해야 하는 상황이라고 가정하자.
let arr = [1, 2, 3];

// 변수를 배열을 표현하듯이 선언 후 배열 자체를 할당한다.
// arr 배열에 있는 원소들이 각각 순서대로 변수에 할당된다.
let [one, two, three] = arr;
// one = 1, two = 2, three = 3
console.log(one, two, three); // 1 2 3 출력

// 이 때 3번째 변수가 저장하고 싶지 않다면
// let [one, two] = arr; 처럼 그냥 지워주면 된다.

// 만약 배열의 개수를 초과한다면 초기화되지 않은 변수처럼 된다.
let four;
[one, two, three, four] = arr;
console.log(one, two, three, four); // 1 2 3 undefined 출력

// 값이 모자라는 상황을 대비해 기본값을 설정하는 것도 가능하다.
[one, two, three, four = 4] = arr;
console.log(one, two, three, four); // 1 2 3 4 출력

// 2. 객체의 구조 분해 할당
let person = {
  name: "이름",
  age: 23,
  hobby: "게임",
};

// 객체는 중괄호를 사용한다.
// 기본적으로 변수명과 프로퍼티 이름(key 값)을 맞춰야 매핑된다.
let { name, age, hobby } = person;
console.log(name, age, hobby); // 이름 23 게임 출력

// 마찬가지로 존재하지 않는 프로퍼티를 받으려 하면 undefined로 저장되며, 기본값 설정도 마찬가지로 가능하다.
// let { name, age, hobby, extra = "hello" } = person
// console.log(name, age, hobby, extra); 이름 23 게임 hello 출력

// 값을 다른 이름의 변수에 할당하고 싶다면?
let { age: myAge } = person; // age 프로퍼티의 값을 myAge 변수에 할당한다.
console.log(myAge); // 23 출력

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
// 원래라면 func 함수에 객체를 매개변수로 받아와서 프로퍼티를 호출했어야 한다.
// 호출부에 구조 분해 할당을 써버린다.
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person); // 이름 23 게임 undefined 출력
// 주의할 점은 객체를 넘겼을 때만 중괄호와 함께 구조 분해 할당을 받을 수 있다.
