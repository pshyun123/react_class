import {useState} from 'react';

function RadioButton() {
    const [selectVal, setSelectVal] = useState('apple');

    function handleChange(e) {
        setSelectVal(e.target.value);
    }
    return(
        <>
            <label htmlFor="apple">사과
                {/* name은 그루핑을 하기 위함 , id 제한적으로 사용됨 */}
                <input type="radio" name='fruits' id='apple' value="apple" onChange={handleChange} />
            </label>
            <br />
            <label htmlFor="orange">오렌지
                <input type="radio" name='fruits' id='orange' value='orange' onChange={handleChange} />
            </label>
            <br />
            <label htmlFor="strawberry">딸기
                <input type="radio" name='fruits' id='strawberry' value='strawberry' onChange={handleChange} />
            </label>
            <br />
            <p>선택과일: {selectVal}</p>
        </>
    );
}

export default RadioButton;