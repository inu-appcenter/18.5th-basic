// const Button = (props) => {
//   console.log(props);
//   return (
//   <button style={{ color: props.color }}>{props.text} - {props.color}
//   {/*{props.color.toUpperCase()} => 오류 발생
//   -> 카페랑 블로그는 color가 없어 undefined인데  점표기법을 사용했기 때문 */}
//   </button>
//   );
// };

const Button = ({children, text, color = "black"}) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
  <button 
    // 이벤트 헨들러
    // onClick={()=>{
    //   console.log(text);
    // }}
    // 함수의 이름만 설정하기 호출X
    onClick={onClickButton}
    // onMouseEnter={onClickButton}
  style={{ color: color }}>
    {text} - {color.toUpperCase()}
    {children}
  </button>
  );
};



export default Button;