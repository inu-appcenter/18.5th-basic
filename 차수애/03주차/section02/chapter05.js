const o1 = { name: "이정환" };
const o2 = o1;        // o1이 가리키는 객체의 참조값을 그대로 복사 (같은 객체를 가리킴)
const o3 = { ...o1 }; // 스프레드로 속성을 복사해 새 객체를 만듦 (다른 객체)

// 객체는 === 로 비교할 때 내용이 아니라 참조값(주소)을 비교함
console.log(o1 === o2); // true  (같은 객체를 가리킴 → 참조값 같음)
console.log(o1 === o3); // false (내용은 같지만 서로 다른 객체 → 참조값 다름)

// JSON.stringify로 객체를 문자열로 바꿔서 내용을 비교
console.log(
    JSON.stringify(o1) === JSON.stringify(o3)
); // true (둘 다 '{"name":"이정환"}' 문자열이라 같음)