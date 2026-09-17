// 1. 변수 - 나를 소개하는 한 줄
let greeting = "안녕하세요, 백엔드를 공부하고 있는 고명재입니다.";

// 2. 객체 - 내 기본 정보를 하나로 묶기
let me = {
  name: "고명재",
  studentId: "202301440",
  major: "컴퓨터공학부",
  mbti: "ISFP",
};

// 3. 배열 - TMI를 순서대로 담기
let tmi = [
  "한화이글스 팬",
  "롤, 오버워치 좋아함",
  "컴퓨터공학부 학생회 홍보부",
  "프로젝트 경험 1회 (앱팡)",
  "코딩 학원 알바",
];

// 4. 정보 출력하기
console.log(greeting);
console.log("이름: " + me.name);
console.log("학번: " + me.studentId);
console.log("학과: " + me.major);
console.log("MBTI: " + me.mbti);

// 5. 반복문 - TMI를 하나씩 출력
console.log("TMI:");
for (let i = 0; i < tmi.length; i++) {
  console.log("- " + tmi[i]);
}
