import React from 'react'

export default ({ posts }) => (
    <ul className="user-posts">
        <li><b>Posts:</b></li>
        { posts.map(post => (
            <li key={post.id}>{ post.title }</li>
        ))}
    </ul>
)