// import ".App.css";
const UserListMap2 = () => {
    const users = [
        {
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

    const seasons=[
        "새로운 봄", "활기찬 여름", "풍성한 가을", "새하얀 겨울"
    ];
    const newSeasons = seasons.map(e => <li>{e}</li>)
    return( // 특정 조건문이 들어가야하면 못 쓰는 방법, 조건은 위에서 걸고 결과만 출력해야함
        <>
        <h1>천원짜리 변호사 리스트</h1>
        {users &&
        users.map((user) => (
            <div key = {user.email}>
                 <b>{user.userName}</b><span>{user.email}</span>
            </div>
        ))}
        <h1>계절표시</h1>
        <ul>{newSeasons}</ul>
        </>
    );
};

export default UserListMap2;