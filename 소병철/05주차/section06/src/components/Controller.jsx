// 이벤트 핸들러를 받아와 내부에서 사용
const Controller = ({ onClickButton }) => {
  return (
    <div>
      <button
        onClick={() => {
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClickButton(100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onClickButton(10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClickButton(1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Controller;
