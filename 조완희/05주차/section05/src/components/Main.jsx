//  JSX 주의 사항
// 1. 중괄호 내부에는 자바 스크립트 표현식만 넣을 수 있다.
// 여기서 자바 스크립트 표현식이란 ->  하나의 값으로 나와야 함!!
// if문이나 for문은 사용 불가
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀 있어야 한다.
// 4. 최상위 태그는 반드시 하나여만 한다. 최상위 태그를 비워둬도 됌
// 최상위 태그 = 아래의 main 같은 tag

import "./Main.css";

const Main = () => {
  const user = {
    name: "이정환",
    isLogined: true,
  };
  // class는 자바스크립트 예약어라 Classname이라고 써야함
  if (user.isLogined) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <>로그인</>;
  }

  //   return <>{user.isLogined ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
