// App에서 props로 내려준 count를 구조 분해로 바로 받음 (props.count 대신 {count})
const Viewer = ({ count }) => {
    return (
        <div>
            <div>현재 카운트 :</div>
            {/* 부모(App)의 state 값이 바뀔 때마다 이 숫자도 자동으로 다시 렌더링됨 */}
            <h1>{count}</h1>
        </div>
    );
};

export default Viewer;