import React from 'react'
import axios from 'axios'

export default class extends React.Component {

    state = {
        users: [],
        user: null,
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data)
            .then(users => this.setState({ users }))
    }

    onChange = evt => {
        const id = evt.target.value
        if (id) {
            this.getUser(id)
            this.getPosts(id)
        } else {
            this.setState({ user: null })
        }
    }

    getUser = id => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                        .then(res => res.data)
                        .then(user => this.setState({ user }))

    getPosts = id => axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                        .then(res => res.data)
                        .then(posts => this.setState({ posts }))
    render() {
        return (
            <div>
                <h4>Please select a user from drop down menu to see his details and posts.</h4>
                <select onChange={this.onChange} selected={null}>
                    <option value={''}>Please select a user...</option>
                    { this.state.users.map(user => (
                        <option value={user.id} key={user.id}>{user.name}</option>
                    )) }
                </select>
                    
                { this.state.user ? (
                    <div className="details-container">
                        <div className="user-details">
                            <div><b>User Details:</b></div>
                            <div>{this.state.user.name}</div>
                            <div>{this.state.user.username}</div>
                            <div>{this.state.user.email}</div>
                        </div>
                        <ul className="user-posts">
                            <li><b>Posts:</b></li>
                            { this.state.posts.map(post => (
                                <li key={post.id}>{ post.title }</li>
                            ))}
                        </ul>
                    </div>
                ) : " " }
            </div>
        )
    }
}