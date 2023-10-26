import React, { useState } from 'react';
const Counter = () => {
    const [value,setValue] = useState(0);

    return(
        <>
            <p>현재 카운터 값 : <b>{value}</b></p>
            <button onClick={()=>setValue(value+1)}>증가</button>
            <button onClick={()=>setValue(value-1)}>감소</button>
        </>
    );
};
export default Counter;