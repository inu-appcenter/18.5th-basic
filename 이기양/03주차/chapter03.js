let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; //순서대로 할당됨
// console.log(one, two, three, four);

let person = {
  name: "이기양",
  age: 23,
  hobby: "게임",
};

let {
  age: myAge,
  hobby,
  name,
  extra = "hello",
} = person;

// 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra})=>{ // 중괄호를 써서 매개변수 할당할 것을 알릴것.
  console.log(name, age, hobby, extra);
}

func(person)//객체를 넘겨줘야됨
