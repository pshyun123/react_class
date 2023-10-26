const UserListMap = () => {
    const users = [
        {//객체 데이터
            id: 100, 
            userName: "천지훈",
            email: "1000won@gmail.com",
        },
        {
            id: 200, 
            userName: "qqq",
            email: "2000won@gmail.com",
        },
        {
            id: 300, 
            userName: "500",
            email: "1000won@gmail.com",
        },
    ];
// Usersdml 0,1,2 객체를 자동순회 user를 

    // 유일한 값이 있을경우
    const newUsers = users.map(user => (
        <div key={user.id}>
           <b>{user.userName}</b><span>{user.email}</span>
        </div>
    ))
    return( // 여기엔 새롭게 꾸며진 배열
        <>
        <h1>천원짜리 변호사 리스트</h1>
        {newUsers}
        </>
    );
};

export default UserListMap;