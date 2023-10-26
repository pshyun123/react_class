import { useState } from 'react';
import './App.css';
const ToDoList = () => {
    const[todo, setTodo] = useState([
        {id: 1, text: "html study"},
        {id: 2, text: "css study"},
        {id: 3, text: "javascript study"},
        {id: 4, text: "react study"},
    ]);
    const[inputText, setInputText] = useState("");
    const[nextID, setNextID] = useState(5);
    const onChange = e => setInputText(e.targe.value);// 내용입력 시 변경 감지 
    // 버튼 눌리면 새로운 todo list 추가
    // concat 이어붙이기
    const onClick = () => {
        const nextTodo = todo.concat({
            id: nextID,
            text: inputText
        });
        setNextID(nextID + 1);
        setTodo(nextTodo); // 새로운 todolist 반영 및 리랜더링
        setInputText(""); // 입력창 초기화
    };

    // 더블클릭 일어나면 삭제되도록 설정(더블클릭 된 아이디만 삭제하고 다른 것들로 새로운 배열생성)
    const onRemove = id => {
        const removedTodo = todo.filter(e => e.id !== id);
        setTodo(removedTodo);
    };


    // const newTodoList = todo.map(e => (<li key={e.id}>{e.text}</li>));
    const newTodoList = todo.map(e => (
        <li key={e.id} onDoubleClick={()=>onRemove(e.id)}>{e.text}</li>
    ))
    return(
        <>
            <p className='title-name'>할일목록</p>
            <p className='del-guide'>삭제 가이드: 해당항목 더블 클릭</p>
            <input type="text" value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{newTodoList}</ul>
        </>
    );
};

export default ToDoList;
