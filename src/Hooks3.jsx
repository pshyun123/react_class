import{useReducer} from 'react';

// useState와 마찬가지로 상태관리를 위해 사용. 복잡한 로직을 가진 상태를 관리하는데 유용. 좀더 세밀한 제어
// 함수부분을 독립적으로 reducer함수 만들어줌, 세터에서 해주던 역할을 해줌
const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT" :
            return {value: state.value + 1};
        case "DECREMENT" :
            return {value: state.value - 1};
        default : 
            return state;
    }
}

const Counter2 = () => {
    const [state, dispatch] = useReducer(reducer,{value: 0});// 초기 상태를 만듦. 두번째값을 객체 스타일로 설정{}
    return(
        <>
            <p>현재 카운터 값은 {state.value}</p>
            <button onClick={()=>dispatch({type: "INCREMENT"})}>증가</button>
            <button onClick={()=>dispatch({type: "DECREMENT"})}>감소</button>
        </>
    );
};
export default Counter2;