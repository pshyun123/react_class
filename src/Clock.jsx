// useState() 사용해 시간 업데이트

// {}는 구조분해 개념, 특정 API만 가져오기
import { useEffect, useState } from "react";



// 컴포넌트 : 화면의 동작과 화면을 그려주는 요소(return문 안에 화면자체가 반환)가 모두 포함. 반환은 구성된 화면이 반환됨
// date는 실제 화면에 나타나는 값, setDate는 값을 변경시켜주는 함수, 값이 변경-> 자동랜더링
// useEffect 랜더링 되고 난 다음 동작 결정함
const Clock = () => {
    const [date, setDate] = useState(new Date()); 
    useEffect(()=>{
        const tick = () => { // 화살표 함수로 만들어진 익명의 함수(tick은 변수고, 함수엔 이름X)
            setDate(new Date());// 현재시각 보여줌(운영체제로부터 GMT시간 기준)
        };
        const intervalID = setInterval(tick, 1000); // 1초마다 내부콜백으로 불림

        // return 컴포넌트가 언마운트 되는시점. 화면이 사라질 때 자동으로 불러짐
        return () => {
            clearInterval(intervalID) // 화면 사라질때 인터벌 지워라
        }
    },[]);//[]의존성 배열: 빈 배열일 경우 화면이 마운트되는 시점을 의미. 빈배열로 넣어두면 -> 최초로 그려질때만 기능함. /date도 넣을 수 있다.(업데이트 되는 시점이 되어버림)
    //
    return (
        <>
            <h1>현재 시간을 표시합니다.</h1>
            <h2>현재 시간은 {date.toLocaleTimeString()}</h2> 
        </>
    );
};


export default Clock;










