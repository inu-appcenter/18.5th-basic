// =====================================================
//  script.js : 자기소개 페이지를 자바스크립트로 채우기
//
//  공부한 내용 중 3가지를 써봤어요
//   1) 구조 분해 할당          → 객체에서 값 꺼내기
//   2) Truthy/Falsy + 단락평가 → 값이 비어 있을 때 대신 보여줄 글자 정하기
//   3) 배열 메서드 map         → 링크 카드 여러 개를 한 번에 만들기
// =====================================================


// 내 정보를 객체 하나에 모아두기
// 객체는 { 이름표: 값 } 모음이에요. 라벨 붙은 서랍장이라고 생각하면 돼요.
const profile = {
  name: "윤정인",
  school: "인천대학교",
  major: "정보통신공학과",
  mail: "example@gmail.com",
  tel: "", // 일부러 비워둠 → 화면에는 "비공개"로 나와요 (2번 참고)
};


// -----------------------------------------------------
// 1) 구조 분해 할당
// -----------------------------------------------------
// 객체 안의 값들을 꺼내서, 같은 이름의 변수에 한 번에 담는 방법이에요.
//
// 이걸 모르면 이렇게 한 줄씩 써야 해요:
//   const name = profile.name;
//   const school = profile.school;
//   ... (총 5줄)
//
// 구조 분해 할당을 쓰면 한 줄이면 끝!
// → 리액트에서 props(부모가 넘겨준 값)를 꺼낼 때 매번 이렇게 써요.
const { name, school, major, mail, tel } = profile;


// -----------------------------------------------------
// 2) Truthy / Falsy + 단락평가
// -----------------------------------------------------
// 자바스크립트는 true/false가 아닌 값도 참이나 거짓처럼 취급해요.
//   - Falsy(거짓 같은 값): "" (빈 글자), 0, null, undefined, NaN, false
//   - Truthy(참 같은 값): 나머지 전부 ("abc", 123 등)
//
// 그리고 A || B 는 이렇게 동작해요 (이게 단락평가):
//   A가 참 같으면  → 뒤(B)는 보지도 않고 A를 씀
//   A가 거짓 같으면 → B를 씀
//
// 그래서 tel || "비공개" 는
//   전화번호가 있으면 전화번호, 비어 있으면 "비공개"가 돼요.
//   if문 없이 한 줄로 끝!
// → 리액트에서 "조건에 따라 화면에 보여줄지 말지" 정할 때도 이 원리를 써요.
const telText = tel || "01050020235";


// 표에 내 정보 넣기
// - document.getElementById("info") : HTML에서 id="info"인 태그를 찾아와요
// - .innerHTML = ... : 그 태그 안에 HTML을 넣어요
// - 백틱(`)으로 감싼 글자 안에 ${변수}를 쓰면, 그 자리에 변수 값이 들어가요
document.getElementById("info").innerHTML = `
  <tr><th>Name</th><td>${name}</td></tr>
  <tr><th>School</th><td>${school}</td></tr>
  <tr><th>Major</th><td>${major}</td></tr>
  <tr><th>Mail</th><td><a href="mailto:${mail}">${mail}</a></td></tr>
  <tr><th>Tel</th><td>${telText}</td></tr>
`;


// -----------------------------------------------------
// 3) 배열 메서드 map
// -----------------------------------------------------
// 링크 정보를 배열에 담아두기 (배열 = 순서대로 줄 세운 목록)
const links = [
  { icon: "G", title: "GitHub", sub: "jeonginniy", url: "https://github.com/jeonginniy" },
  { icon: "V", title: "velog", sub: "", url: "", color: "velog" },
  { icon: "N", title: "공부 기록", sub: "Notion", url: "" },
];

// map은 배열을 하나씩 돌면서 각각을 바꾸고, 바뀐 것들로 새 배열을 만들어줘요.
//   [링크 정보 3개]  --map-->  [카드 HTML 3개]
// 카드가 10개로 늘어나도 위 배열에 한 줄만 추가하면 돼요.
//
// 여기서도 2번의 || 를 다시 썼어요:
//   - url이 비어 있으면 "#"
//   - sub가 비어 있으면 "준비 중"
//   - color가 아예 없으면 undefined(거짓 같은 값)라서 "" 로 바뀜
//
// → 리액트에서 목록을 화면에 그릴 때 거의 항상 map을 써요.
const cards = links.map((link) => `
  <a class="link" href="${link.url || "#"}" target="_blank">
    <span class="icon ${link.color || ""}">${link.icon}</span>
    <span><strong>${link.title}</strong><br><small>${link.sub || "준비 중"}</small></span>
  </a>
`);

// join("")은 배열을 글자 하나로 쭉 이어 붙여요.
// innerHTML에는 배열이 아니라 글자를 넣어야 해서 필요해요.
document.getElementById("links").innerHTML = cards.join("");

// =====================================================
//  여기부터 화면이 움직이는 부분
//   4) Promise + async/await → "잠깐 기다렸다가" 다음 동작하기
//   5) for...of 순회         → 글자 하나씩, 카드 하나씩 보여주기
//   6) Date 객체             → 실시간 시계
// =====================================================


// -----------------------------------------------------
// 4) Promise + async/await
// -----------------------------------------------------
// wait(ms) : ms만큼 기다려주는 함수 (1000ms = 1초)
//
// - Promise는 처음엔 "대기(Pending)" 상태예요.
// - setTimeout이 ms만큼 시간을 재고 나서 resolve()를 부르면
//   "성공(Fulfilled)" 상태로 바뀌어요.
//   (시간 재는 일은 자바스크립트가 아니라 브라우저의 Web API가 대신 해줘요)
//
// - await wait(100) 이라고 쓰면 "0.1초 기다렸다가 다음 줄 실행" 이 돼요.
// - await는 async 함수 안에서만 쓸 수 있어요.
//   (노트에 antnc, astnc로 적혀 있는데 async가 맞는 철자예요)
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


// -----------------------------------------------------
// 5) for...of 순회
// -----------------------------------------------------
// for (const 하나 of 여러개) { ... }
//   → 여러 개 중에서 하나씩 순서대로 꺼내서 { } 안의 일을 해요.
//   → 글자(문자열)도 한 글자씩 꺼낼 수 있어요.

// [타이핑 효과] 인사말을 한 글자씩 붙이기
async function typeIntro() {
  const intro = document.getElementById("intro");
  const text =
    "안녕하세요. 정보통신공학과 지능제어/내비게이션 연구실에서\n" +
    "사람 움직임을 학습하는 AI를 공부하고 있습니다."; // \n = 줄바꿈

  for (const letter of text) {
    intro.textContent += letter; // 한 글자 붙이고
    await wait(50);              // 0.05초 쉬기
  }

  intro.classList.add("done"); // 다 쳤으면 깜빡이는 커서 없애기
}

// [하나씩 등장] 표의 줄과 링크 카드를 차례대로 보이게 하기
async function showOneByOne() {
  // querySelectorAll : 조건에 맞는 태그를 전부 찾아와요
  // "#info tr, .link" = 표의 모든 줄 + 모든 링크 카드
  const items = document.querySelectorAll("#info tr, .link");

  for (const item of items) {
    item.classList.add("show"); // show를 붙이면 CSS가 서서히 나타나게 해줘요
    await wait(150);
  }
}

// 순서대로 실행: 타이핑이 "끝날 때까지 기다렸다가" 카드 등장
async function start() {
  await typeIntro();
  await showOneByOne();
}

start();


// -----------------------------------------------------
// 6) Date 객체 → 실시간 시계
// -----------------------------------------------------
function updateClock() {
  const now = new Date(); // 지금 이 순간의 날짜와 시간

  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 월은 0부터 시작해서 +1 해야 해요
  // (노트에 getMonth(); +1; 로 적혀 있는데, 세미콜론(;) 때문에 +1이 안 붙어요!)
  const date = now.getDate();       // (노트의 getaDate가 아니라 getDate)

  // padStart(2, "0") : 두 자리가 안 되면 앞에 0을 채워줘요 (5 → "05")
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("clock").textContent =
    `${year}.${month}.${date}  ${hour}:${minute}:${second}`;
}

updateClock();                  // 처음 한 번 바로 보여주고
setInterval(updateClock, 1000); // 그다음부터 1초마다 다시 실행