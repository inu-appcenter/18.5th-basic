import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 무나열, 배열 값만 렌더링 된다
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 반드시 하나여야만 한다 (최상위 태그가 없다면 빈 태그(<></>)로 묶는다)

const Main = () => {
  // const number = 10;
  // const obj = {a: 1};

  // return (
  //   <main>  {/* main 태그가 최상위 태그임*/}
  //     <img></img>
  //     <h1>main</h1>
  //     <h2>{number + 10}</h2>
  //     <h3>{number % 2 === 0 ? "짝수":"홀수"}</h3>
  //     {10}
  //     {number}
  //     {[1,2,3]}
  //     {/* 오류를 발생하지 않지만 화면에 렌더링 되지 않음 */}
  //     {true}
  //     {undefined}
  //     {null}
  //     {/* 객체를 사용할 때는 점 표기법을 이용해야하낟 */}
  //     {obj.a}
  //   </main>
  // );

  const user = {
    name: "이정환",
    isLogin: true,
  };

  if(user.isLogin){
    return (
      <div
        // style={{
        //   /* - 사용 금지 */
        //   backgroundColor: "red",
        //   borderBottom: "5px solid blue",
        // }}
        // jsx는 자바스크립트랑 HTML을 함께 써서 class를 쓸수 없음
        className="logout"
        >
          로그아웃
        </div>
      );
  } else {
    return <div>로그인</div>;
  }

  // return (
  //   <>
  //     {user.isLogin ? (
  //       <div>로그아웃</div>
  //     ) : (
  //       <div>로그인</div>
  //     )}
  //   </>
  // );
};

export default Main;