// useMemo:컴포넌트의 성능을 최적화하기 위해 사용,이전에 계산한 값을 재사용
import{useState,useMemo,useCallback,useRef} from 'react';

const getAverage= numbers => {
    if(numbers.length === 0) return 0; // 방어코드, 불필요하게 호출되는 걸 막음
    console.log("평균값 계산");
    // 두개의 입력값을 입력받아 하나의 결과값으로 만들고 다음 요소 연산
    const sum = numbers.reduce((a,b)=> a+b);

    return sum / numbers.length;
    

}                      
// 불필요한 렌더링을 계속하고 있음(평균값 계산.)
const Average = () => {
    const [list, setList] = useState([]);// 새로운 객체 생성 시 주소 바뀜->그때마다 렌더링 발생
    const [number, setNumber] =useState('');
    const inputEl = useRef(null);
    const onChange = (e) => {
        setNumber(e.target.value);
    };
    const onInsert = useCallback(() => {
        console.log("리스트에 값을 추가");
        if (isNaN(parseInt(number))) return 0; // NaN뜨는걸 방지
        const nextList = list.concat(parseInt(number)); //concat을 넣어야지만 주소 바뀜/number로 문자형에서 정수로 바꿔줌
        setList(nextList);
        setNumber(""); 
        inputEl.current.focus();
    }, [number,list]);
    
// avg값이 초기화되면 이전 값 초기화 됨 / 메모라이징 해줘야함 갱신된 값
    const avg = useMemo(() => getAverage(list), [list]);//최초렌더링때만 실행되는데 이때 []이렇게 빈배열이면 계산이 안되므로 안에 값을 넣어줌
    return (
        <>
            <input type='text' value={number} onChange={onChange} ref={inputEl} /> {/* 주소만 넘겨주고 onChange 발생. 즉시실행 x */}
            <button onClick={onInsert}>등록</button>
            <ul>
                {/* 인덱스는 내부값이 아니기 때문에 index를 키로 사용하기 위해 map 사용*/}
                {list.map((value, index) => (<li key={index}>{value}</li>))}
            </ul>
            <div>
                {/* 만나면 즉시 실행 */}
                {/* <b>평균값 : </b> {getAverage(list)} */}
                <b>평균값 : </b> {avg}
            </div>

        </>
    )
}

export default Average;