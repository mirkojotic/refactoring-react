import React from 'react'
import UserSelector from '../user-selector'
import UserDetails from '../user-details'
import PostList from '../post-list'

export default class extends React.Component {

    state = {
        users: [],
        user: null,
        posts: []
    }

    componentDidMount() {
        this.props.getUsers()
            .then(users => this.setState({ users }))
    }

    onChange = evt => {
        const id = evt.target.value
        if (id) {
            this.props.getUser(id).then(user => this.setState({ user }))
            this.props.getPosts(id).then(posts => this.setState({ posts }))
        } else {
            this.setState({ user: null })
            this.setState({ posts: [] })
        }
    }

    render() {
        return (
            <div>
                <UserSelector users={this.state.users} onChange={this.onChange} />
                { this.state.user ? (
                    <div className="details-container">
                        <UserDetails user={this.state.user} />
                        <PostList posts={this.state.posts} />
                    </div>
                ) : " " }
            </div>
        )
    }
}