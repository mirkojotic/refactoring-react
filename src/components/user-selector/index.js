import React from 'react'

export default ({ users, onChange }) => (
    <div>
        <h4>Please select a user from drop down menu to see his details and posts.</h4>
        <select onChange={onChange} selected={null}>
            <option value={''}>Please select a user...</option>
            { users.map(user => (
                <option value={user.id} key={user.id}>{user.name}</option>
            )) }
        </select>
    </div>
)