// App에서 props로 내려준 onClickButton 함수를 구조 분해로 받음
const Controller = ({ onClickButton }) => {
    return (
        <div>
            {/* 버튼 클릭 시 부모(App)의 함수를 호출하면서 더할 값을 인자로 전달 */}
            {/* onClick={onClickButton(-1)}처럼 쓰면 렌더링 때 바로 실행되므로, 화살표 함수로 감싸야 함 */}
            <button onClick={() => onClickButton(-1)}>-1</button>
            <button onClick={() => onClickButton(-10)}>-10</button>
            <button onClick={() => onClickButton(-100)}>-100</button>
            <button onClick={() => onClickButton(100)}>+100</button>
            <button onClick={() => onClickButton(10)}>+10</button>
            <button onClick={() => onClickButton(1)}>+1</button>
        </div>
    );
};

// 다른 파일(App.jsx)에서 import 할 수 있도록 내보냄
export default Controller;