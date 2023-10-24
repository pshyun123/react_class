// props 기본값 설정 : defaultProps
// const MyComponent = props => {
//     const {name, age, children} = props;
    const MyComponent =  ({name, age, children}) => {
        // 비구조화 할당(구조분해) : props객체의 속성 혹은 값을 변수에 대입함

    return(
    <div>
        안녕하세요. 제 이름은 {name}입니다.나이는 {age}, 인사말
        {children}
    </div>
    );
}

MyComponent.defaultProps = {
name : "기본",
age:20
}

export default MyComponent;
//기본 정보