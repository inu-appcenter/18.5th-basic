const Controller = ({ onClickButton }) => {
  return (
    <div>
      {/*onClickButton이라는 함수를 호출해서 원하는 인수를 전달하기 위해 화살표함수 사용 */}
      <button onClick={() => {
        onClickButton(-1);
      }}>-1</button>

      <button onClick={() => {
        onClickButton(-10);
      }}>-10</button>

      <button onClick={() => {
        onClickButton(-100);
      }}>-100</button>

      <button onClick={() => {
        onClickButton(100);
      }}>+100</button>

      <button onClick={() => {
        onClickButton(10);
      }}>+10</button>

      <button onClick={() => {
        onClickButton(1);
      }}>+1</button>

    </div>
  )
};

export default Controller;