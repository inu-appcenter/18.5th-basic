// 1. 객체 생성 (프로필)
const myProfile = {
  name: "이기양",
  studentId: "202301508",
  department: "컴퓨터공학부",
  grade: "2학년",
  age: "23살",
  location: "인천 서해구",
  mbti: "ISFP",
  hobbies: ["컴퓨터게임", "드라마 보기"],
  status: "" // Falsy
};

// 2. 객체 구조 분해 할당 & Rest 매개변수
const { name, hobbies, ...otherInfo } = myProfile;

// 3. 단락 평가 (myProfile.status가 Falsy이므로 기본값 출력)
const userStatus = myProfile.status || "웹 개발과 소프트웨어에 관심이 많습니다!";

// 4. Date 객체 활용
function displayTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  
  const todayElement = document.getElementById("today-date");
  if (todayElement) {
    todayElement.textContent = `${year}년 ${month}월 ${date}일`;
  }
}

// 5. 배열 순회 및 배열 메서드 활용
function renderProfile() {
  const profileList = document.getElementById("profile-list");
  if (!profileList) return;

  const infoArray = [
    { label: "이름", value: name },
    { label: "학번", value: otherInfo.studentId },
    { label: "학과", value: `${otherInfo.department} (${otherInfo.grade})` },
    { label: "나이", value: otherInfo.age },
    { label: "사는 곳", value: otherInfo.location },
    { label: "MBTI", value: otherInfo.mbti },
    { label: "취미", value: hobbies.join(", ") }
  ];

  infoArray.forEach((info) => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${info.label}:</b> <span>${info.value}</span>`;
    profileList.appendChild(li);
  });
}

// 6. Promise 및 async/await 비동기 처리
function fetchStatusMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userStatus);
    }, 2000); // 2초 대기
  });
}

async function initPage() {
  displayTodayDate();
  renderProfile();

  const statusElement = document.getElementById("status-message");
  if (statusElement) {
    const message = await fetchStatusMessage();
    statusElement.textContent =  message;
  }
}

  initPage();