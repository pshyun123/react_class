// props 기본값 설정 : defaultProps
const MyComponent = props => {
    return <div>안녕하세요 제이름은 {props.name}입니다.</div>
}

MyComponent.defaultProps = {
name : "기본",
age:20
}

export default MyComponent;