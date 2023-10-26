// useEffect: 생명주기 메소드를 대체하는 react hook중 하나
// 컴포넌트가 랜더링 될 때마다 특정 동작을 수행
// 컴포넌트가 랜더링 된 이후에 수행. 기본적으로 매 랜더링 마다 수행됨
// 의존성 배열에 전달된 상태가 변경될 때마다 수행되게 함.

import {useState, useEffect} from 'react';

const MemberInfo = () => {
    const[name, setName] = useState("");
    const[nickName, setNickName] = useState("");

    //[]: 의존성 배열. 값을 넣지 않으면 마운트 시에만 호출됨
    useEffect(()=>{
        console.log("랜더링 완료");
        console.log(name, nickName);
    },[]);
    const onChangeName = e => {
        setName(e.target.value);
    };
    const onChangeNickName = e => {
        setNickName(e.target.value);
    };
    return(
        <>
            <input type="text" value={name} onChange={onChangeName}/>
            <input type="text" value={nickName} onChange={onChangeNickName}/>
        </>
    )

};
export default MemberInfo;