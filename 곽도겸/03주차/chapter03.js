// 1. 배열의 구조 분해 할당
let arr =[1,2,3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
//위 같이 하면 번거로움

let [one,two,three, four=4] = arr;
//console.log(one,two,three,four);//배열의 크기를 넘어가면 undefined가 된다 그래서 따로 기본값을 설정하는것도 가능하다.

// 2. 객체의 구조 분해 할당
let person ={
    name : "곽도겸",
    age : 21,
    hobby : "야구",
};
let {
    name,
    age : myage,
    hobby,
    extra="hello",
} = person;
// console.log(name , myage , hobby,extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name , age ,hobby ,extra}) => {
    console.log(name , age ,hobby ,extra);
}
func(person);//person 객체를 넘겨야지 구조분해할당이 가능한거임