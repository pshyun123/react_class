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