import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      <div id="card">
        <header className="card-header">
          <div className="avatar">😄</div>
          <h1>김보민</h1>

          <button
            type="button"
            className="like-btn"
            onClick={() => setCount(count + 1)}
          >
            👋 손 흔들기 {count}
          </button>
        </header>

        <div className="card-body">
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

          <section>
            <h2>🌼 취미</h2>
            <ul className="hobby-list">
              <li>🚶 산책하기</li>
              <li>📖 중국어 공부</li>
              <li>✈️ 여행</li>
            </ul>
          </section>

          <section>
            <h2>🛠 사용할 수 있는 것</h2>

            <p className="skill-title">언어</p>
            <ul className="hobby-list">
              <li>C언어</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>

            <p className="skill-title">툴</p>
            <ul className="hobby-list">
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
            </ul>
          </section>

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

export default App;