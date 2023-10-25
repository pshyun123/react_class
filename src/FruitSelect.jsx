import {useState} from 'react';

const FruitSelect = () => {
    const [value, setValue] = useState('grape');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        alert("선택한 과일 : " + value);
        e.preventDefault(); // 기본 이벤트 막음(창이 새로고침되는 걸 막음)
    }

    return(
        <form action="#" onSubmit={handleSubmit}>
            <label>과일을 선택하세요.
                <select value={value} onChange={handleChange}>
                    {/* onChange={handleChange}가 값이 바뀔때 랜더링을 일으켜줌 */}
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
            {/* handleSubmit가 불러짐 */}
        </form>
        
    );
}

export default FruitSelect;