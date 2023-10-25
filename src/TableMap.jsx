import {useState, useEffect } from "react";
const TableMap = () => {
    const data = [
        {id : 100, name : "카즈하", age : 21},
        {id : 200, name : "은채", age : 19},
        {id : 300, name : "채원", age : 22},
        {id : 400, name : "윤진", age : 20},
    ];
    const [mapData, setMapData] = useState("");
    useEffect(()=>{
        setMapData(data);
    }, []);//빈배열
    const tableClickEvent = (item) => {
        console.log(item);
    }
    return(
        <table>
            <thred>
                <tr>
                    <th>ID</th>
                    <th>이름</th>
                    <th>나이</th>
                </tr>
            </thred>
            <tbody>
                {/* mapData && : 조건부 랜더링, 맵 데이터가 있을때만 그려주자-> 화면 그려진 다음에 useEffect가 호출됨, 그때 setMapData 값불려진다(실제로는 서버다녀옴).  */}
                {mapData && mapData.map(item => (
                    <tr key={item.id} onClick={()=>tableClickEvent(item)}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default TableMap;