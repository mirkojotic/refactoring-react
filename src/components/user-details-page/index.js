import React from 'react'
import { connect } from 'react-redux'
import UserSelector from '../user-selector'
import UserDetails from '../user-details'
import PostList from '../post-list'
import { fetchUsers, userChanged } from '../../actions'

class UserDetailsPage extends React.Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        const { users, user, posts } = this.props
        return (
            <div>
                <UserSelector users={users} onChange={this.props.userChanged} />
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
        fetchUsers,
        userChanged
    }
)

export default enhance(UserDetailsPage)