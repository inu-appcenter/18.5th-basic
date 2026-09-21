let o1 ={ name: "이정현"};
let o2 = o1; //얕은 복사
let o3 = {...o1}; // 깊은 복사

console.log(o1 === o2); //true
console.log(o1 === o3); //false //얕은 비교

console.log( JSON.stringify(o1) === JSON.stringify(o3)); //true //깊은 비교