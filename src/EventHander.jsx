import{useState}from 'react';

const EventHander = () => {
    const [userName, setUserName] = useState("");
    const[message, setMessage] = useState("");

    // 함수 만들기
    // username이랑 메세지의 값이 바뀔 때
    const onChangeUserName = e => setUserName(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    // 온클릭 버튼 눌릴때
    const onClick = () => {
        alert(userName + " : " + message);
        // 화면 초기화(출력 창)
        setUserName("");
        setMessage("");
    };
    const onKeyPress = e => {
        if(e.key === "Enter") onClick();
    };
    return(
        <>
            <h1>이벤트 연습</h1>
            <input type="text" placeholder='사용자명' value={userName} onChange={onChangeUserName}/>
            <input type="text" placeholder='아무메세지' value={message} onChange={onChangeMessage}
            onKeyDown={onKeyPress}/>
            <button onClick={onClick}>확인</button>
        </>
    );
};

export default EventHander;