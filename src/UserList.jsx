const User = (props) => {
    return(
        <div>
            <b>{props.user.userName}</b> <span>{props.user.email}</span>
        </div>
    );
}

const UserList = () => {
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
    return(
        <>
        {/* 배열의 .찍고 들어가는것 */}
            {/* <div>
                <b>{users[0].userName}</b> <span>{users[0].email}</span>
            </div>
            <div>
                <b>{users[1].userName}</b> <span>{users[1].email}</span>
            </div>
            <div>
                <b>{users[2].userName}</b> <span>{users[2].email}</span>
            </div> */}

            <User user={users[0]}/>
            <User user={users[2]}/>
        </>
    );
};

export default UserList;