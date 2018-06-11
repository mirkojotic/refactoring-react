import React from 'react'
import { connect } from 'react-redux'
import UserSelector from '../user-selector'
import UserDetails from '../user-details'
import PostList from '../post-list'
import { addUsers, addUser, removeUser, addPosts, removePosts } from '../../actions'

class UserDetailsPage extends React.Component {

    componentDidMount() {
        this.props.getUsers().then(this.props.addUsers)
    }

    onChange = id => {
        if (id) {
            this.props.getUser(id).then(this.props.addUser)
            this.props.getPosts(id).then(this.props.addPosts)
        } else {
            this.props.removeUser()
        }
    }

    render() {
        const { users, user, posts } = this.props
        return (
            <div>
                <UserSelector users={users} onChange={this.onChange} />
                { user ? (
                    <div className="details-container">
                        <UserDetails user={user} />
                        <PostList posts={posts} />
                    </div>
                ) : " " }
            </div>
        )
    }
}

const enhance = connect(
    state => ({
        users: state.users,
        user: state.user,
        posts: state.posts
    }),
    { 
        addUsers, 
        addUser, 
        removeUser, 
        addPosts, 
        removePosts 
    }
)

export default enhance(UserDetailsPage)