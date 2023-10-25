import React, {useState} from "react";
const Say = () => {
    // 앞 : 게터, 뒤: 세터(바꿔주는애)
    const[message, setMessage] = useState("");
    const onClickEnter = () => setMessage("안녕하세요!");
    const onClickLeave = () => setMessage("안녕히 가세요~");
    const [val, setColor] = useState("black");
    return(
        <> 
        {/* 함수는 호출이 되어야지만 불려짐. 호출될때는 기본적으로 작은괄호()있어야함.  */}
        {/* 1) {onClickEnter}에 대한 선언(등록)만 해둠. onclick이 있을때 이벤트 핸들러가 호출을 대신해줌
        {onClickEnter}뒤에 ()넣는 순간(등록되는 순간) 불러지니까 안됨 */}
        {/* 2) {()=> setColor("red") 이거 자체가 함수. 함수안에 익명의 함수를 등록. */}
        {/* 매개변수가 있으면->람다식으로 함수걸어줌, 호출이 일어날때까지 실행X => 화살표 함수 사용 
            없으면->함수이름만 참조변수로 걸어줌 */}
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color: val}}> {message}</h1>
            <button style={{color: "red"}} onClick={()=>setColor("red")}>빨간색</button>
            <button style={{color: "green"}} onClick={()=>setColor("green")}>초록색</button>
            <button style={{color: "blue"}} onClick={()=>setColor("blue")}>파란색</button>
        </>
    );
};

export default Say;