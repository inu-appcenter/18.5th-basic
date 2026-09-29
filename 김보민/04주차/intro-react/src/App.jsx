// React에서 state를 쓰기 위해 useState를 가져옴
import { useState } from "react";
import "./App.css";

function App() {
  // state: 화면에 영향을 주는 변수
  // show: 현재 값 (처음엔 false = 인사말이 안 보임)
  // setShow: show 값을 바꾸는 함수
  const [show, setShow] = useState(false);

  return (
    <div id="container">
      <div id="card">
        {/* ① 상단 헤더: 주황 배경 + 흰 글씨로 이름이 잘 보이게 함 */}
        <header className="card-header">
          <div className="avatar">🐣</div>
          <h1>김보민</h1>
          <p className="sub">인천대학교 정보통신공학과 25학번</p>
        </header>

        <div className="card-body">
          {/* ② 소개: 표(table) 대신 "라벨 + 내용" 한 줄씩으로 읽기 편하게 */}
          <section>
            <h2>📌 소개</h2>

            <div className="info-row">
              <span className="info-label">학번</span>
              <span>25학번</span>
            </div>
            <div className="info-row">
              <span className="info-label">학과</span>
              <span>인천대학교 정보통신공학과</span>
            </div>
            <div className="info-row">
              <span className="info-label">활동</span>
              <span>정보통신공학과 39대 학생회 홍보부원</span>
            </div>
            <div className="info-row">
              <span className="info-label">관심 분야</span>
              <span>통신 네트워크, 웹/앱 개발</span>
            </div>
            <div className="info-row">
              <span className="info-label">MBTI</span>
              <span>INTP</span>
            </div>
            <div className="info-row">
              <span className="info-label">목표</span>
              <span>앱센터 베이직 완주</span>
            </div>
          </section>

          {/* ③ 취미: 왼쪽 정렬된 둥근 칩 모양 (스타일은 App.css의 .hobby-list) */}
          <section>
            <h2>🌼 취미</h2>
            <ul className="hobby-list">
              <li>🚶 산책하기</li>
              <li>📖 중국어 공부</li>
              <li>✈️ 여행</li>
            </ul>
          </section>

          

          {/* ⑤ GitHub 링크 */}
          <p className="github-link">
            <a
              href="https://github.com/qhals9441"
              target="_blank"
              rel="noreferrer"
            >
               GitHub 바로가기
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// 다른 파일(main.jsx)에서 import 할 수 있게 내보냄 (ESM의 export default)
export default App;