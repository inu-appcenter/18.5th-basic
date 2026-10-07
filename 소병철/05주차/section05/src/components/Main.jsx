import "./Main.css";
// 조건에 따라 각각 다른 UI를 렌더링하도록 함.

const Main = () => {
  // 접속한 유저의 상태를 저장하는 상수
  const user = {
    name: "name",
    isLogin: true,
  };
  // 로그인된 상태라면 "로그아웃" 버튼을, 아니라면 "로그인" 버튼을 렌더링.
  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;

  // 조건문을 이용해서 처리하기
  if (user.isLogin) return <div className="logout">로그아웃</div>;
  else return <div>로그인</div>;
};

export default Main;
