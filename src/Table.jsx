import React from "react";

const Table = () => {
    const date = [
        {id: 1, name: '장원영', age:20},
        {id: 2, name: '이서', age:18},
        {id: 3, name: '가을', age:22},
        {id: 4, name: '리즈', age:21},
    ];
    const handleTableRowClick = (item) => {
        console.log(item);
    };
    return(
        <table>
            <tread>
                <tr>
                    <th>ID</th>
                    <th>이름</th>
                    <th>나이</th>
                </tr>
            </tread>
            <tbody>
                {/* 구현부 넣어줌 */}
                {date.map((item) => (
                    // onclick되었을때 콜백함수가 불러져야한다. map에서 id(key값)가 없으면 전체를 검색해야함.(성능때문에) 유일한 식별자 필요.
                    // 방법 1. 
                    // <tr key={item.id} onClick={() => handleTableRowClick(item)}>
                    // 방법 2.
                    <tr key={item.id} onClick={() => console.log(item)}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;