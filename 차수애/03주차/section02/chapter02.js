
function returnFalse() {
    return false;
}

function returnTrue() {
    return true;
}

console.log(returnTrue() && returnFalse()); // false
console.log(returnTrue() || returnFalse()); // 첫번쨰 피연산자 값으로 단락평가 이루어짐

// Truthy, Falsy

function returnFalse() {
    return undefined;
}

function returnTrue() {
    return 10;
}

console.log(returnTrue() || returnFalse()); // truthy한 값이 나오면 단락평가로 인해 returnFalse()는 실행되지 않음
console.log(returnFalse() && returnTrue()); // undefined

// 단락평가를 활용한 사례

function printName(person) {
    const name = person && person.name; // A가 falsy면 B를 실행하지 않고 A를 그대로 반환 A가 truthy면 B를 반환합
    console.log(name || "person의 값이 없음"); // A가 truthy면 A를 그대로 반환. A가 falsy면 B를 반환
}
printName();
printName({ name: "이정환" });