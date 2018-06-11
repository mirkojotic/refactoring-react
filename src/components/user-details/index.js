import React from 'react'

export default ({ user }) => (
    <div className="user-details">
        <div><b>User Details:</b></div>
        <div>{user.name}</div>
        <div>{user.username}</div>
        <div>{user.email}</div>
    </div>
)