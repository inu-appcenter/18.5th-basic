// App이라는 함수형 컴포넌트를 선언
function App() {
  // return 안에 화면에 표시할 JSX를 작성
  return (
    // HTML body 부분에 있던 코드들
    <div className="card">
      <div className="outer">
        <div className="with-bg"></div>
      </div>

      <br />
      <br />

      <h1>채희수</h1>
      <p className="email">chae4794@naver.com</p>

      <div className="intro">
        <p>학교 : 인천대학교</p>
        <p>학과 : 정보통신공학과</p>
        <p>학번 : 202301626</p>
        <p>위치 : 경기도 안산시</p>
        <p>mbti : infp</p>
        <p>관심분야 : 웹 프론트엔드</p>
        <p>목표 : 프론트엔드랑 백엔트를 잘하는 풀스택 개발자</p>

        <p>
          스터디를 통해 얻어가고 싶은 것 : 프로젝트를 하는 방법,
          프론트엔드랑 백엔드에 관련된 지식
        </p>

        <p>
          취미 : 축구 경기 챙겨보기(특히 맨체스터 유나이티드 팀을 많이
          챙겨봄)
        </p>

        <p>전화번호 : 010-7118-4794</p>
      </div>
    </div>
  );
}

// 다른 파일에서 App 컴포넌트를 import할 수 있도록 내보냄
export default App;
