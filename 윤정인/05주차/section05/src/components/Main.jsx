//- **JSX 주의 사항**
//1. 중괄호 내부에는 자바스크립트 표현식(삼항연산사, 값, 변수의 이름)만 넣을 수 있다. 
//    - if문 for문 → 오류. 값으로써 평가할 수 없다.
//2. jsx는 숫자, 문자열, 배열 값만 렌더링 된다. 
//3. 모든 태그는 닫혀있어야 한다. 
//4. 최상위 태그는 반드시 하나여야만 한다.
import "./Main.css";

const Main = () => {
  const user = {
    name : "이정환",
    isLogin: true,
  };

  if (user.isLogin){
    return <div className="logout">로그아웃</div>;
  } else{
    return <div>로그인</div>;
  }
};

export default Main;