// onChange 이벤트 핸들링

import { useState } from "react";

const EventPratice = () => {
    const [message, setMessage] = useState("안녕하세요");
    const changeMsg = (e) => { //e : event를 감지하는 것(정보덩어리)
        setMessage(e.target.value); //.target : 이벤트 일어난 곳 찾음. input 창에 들어오는 값=e.target
    }

    return (
        <>
            <h1>이벤트 연습</h1>
            <input type="text" placeholder="이름을 입력하세요" onChange={changeMsg}/>
            <h2>입력받은 메세지 : {message}</h2>
        </>
    )
}

export default EventPratice;