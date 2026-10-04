// 구조 분해 할당으로 count props를 받아와 내부에서 사용
const Viewer = ({ count }) => {
  return (
    <div>
      <div>현재 카운트: </div>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;
