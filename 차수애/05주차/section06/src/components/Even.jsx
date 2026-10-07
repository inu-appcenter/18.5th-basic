import { useEffect } from "react";

const Even = () => {
    // 의존성 배열이 [](빈 배열)이므로 마운트될 때 딱 한 번만 실행됨
    useEffect(() => {
        // 마운트 시에는 여기에 실행할 코드를 쓰면 됨 (지금은 비어 있음)

        // 클린업(정리) 함수: 컴포넌트가 화면에서 사라질 때(언마운트) 실행됨
        return () => {
            console.log("unmount");
        };
    }, []);

    return <div>짝수입니다</div>;
};

export default Even;