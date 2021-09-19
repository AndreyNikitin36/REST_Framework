import React from 'react'

const UserItem = ({user}) => {
    return (
        <tr>
            <td>{user.username}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
        </tr>
    )
}


const UserList = ({users}) => {
    return (
        <table>
            <th>username</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>email</th>
            {users.map((a) => <UserItem user={a} />)}
        </table>
    )
}

export default UserList