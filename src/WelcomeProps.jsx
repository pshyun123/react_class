//()안이 객체임. 
// 방법1.
const WelcomeProps = (props) => {
    return (
        <>
            <h1>Hello,{props.name}</h1>
            <h3>저의 주소는 {props.addr}이며,</h3>
            <h3>저의 나이는 {props.age}이며,</h3>
        </>
    );
}
export default WelcomeProps;
// 다른데에서 불러주기 위해 사용



//방법2.
//(const props=){name}
const WelcomeProps2 = ({name,addr,age}) => {
    return (
        <>
            <h1>Hello,{name}</h1>
            <h3>저의 주소는 {addr}이며,</h3>
            <h3>저의 나이는 {age}이며,</h3>
        </>
    );
}

//방법3.
const WelcomeProps3 = (props) => {
    // 배열의 이름이 props(다른이름 사용해도 무방, 위 아래의 props자리에 오는 값이 동일하기만 하면됨)
    const {name,addr,age} = props
    return (
        <>
            <h1>Hello,{name}</h1>
            <h3>저의 주소는 {addr}이며,</h3>
            <h3>저의 나이는 {age}이며,</h3>
        </>
    );
}
