import "./Main.css" //파일 경로만 불러도 됌

//JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. 
//2. 숫자, 문자열 ,배열 갑만 렌더링 된다. 
//3. 모든 태그는 닫혀있어야 한다. 
//4. 최상위 태그는 반드시 하나여야만 한다. => 여기서는 <main> 태그가 최상위 태그이다. 빈 태그도 가능
const Main = () => {
  const user = {
    name: "최유경",
    islogin: true,
  }
  // return (
  //   <>
  //     {user.islogin ? (
  //       <div>로그아웃</div>
  //     ) : (
  //       <div>로그인</div>
  //     )}
  //   </>
  // );

  if (user.islogin) {
    return (
      <div
        // style={{
        //   backgroundColor: "red",
        //   borderBottom: "5px solid blue", /*카멜케이스*/
        // }}
        className="logout"
      >
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }
};

export default Main;