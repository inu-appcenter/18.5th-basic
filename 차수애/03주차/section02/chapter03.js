// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; // 배열의 구조 분해 할당을 통해 arr 배열의 값을 one, two, three 변수에 할당하고, 네 번째 값이 없으므로 four 변수에는 기본값 4를 할당
console.log(one, two, three, four);  // 1 2 3 4

// 2. 객체의 구조 분해 할당

let person = { 
    name: "이정환", 
    age: 30,
    hobby: "축구"
 };

let { name, age : myage , hobby , extra} = person; // 객체의 구조 분해 할당을 통해 person 객체의 name, age, hobby 속성 값을 각각 name, age, hobby 변수에 할당
console.log(name, myage, hobby, extra); // 이정환 30 축구 undefined

//3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
};

func(10);
