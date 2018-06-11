import { createLogic } from 'redux-logic'
import { USER_CHANGED, FETCH_USERS, FETCH_USER, FETCH_POSTS  } from '../actions'
import { 
    addUsers,
    fetchUser,
    addUser, 
    removeUser, 
    fetchPosts,
    addPosts 
} from '../actions'

const userChangedLogic = createLogic({
    type: USER_CHANGED,
    process({ action }, dispatch, done) {
        const { id } = action
        if(id) {
            dispatch(fetchUser(id))
            dispatch(fetchPosts(id))
        } else {
            dispatch(removeUser())
        }
        done()
    }
})

const fetchUsersLogic = createLogic({
    type: FETCH_USERS,
    process({ action, API }, dispatch, done) {
        API.getUsers()
           .then(users => dispatch(addUsers(users)))
           .then(done)
    }
})

const fetchPostsLogic = createLogic({
    type: FETCH_POSTS,
    process({ action, API }, dispatch, done) {
        API.getUser(action.id)
           .then(user => dispatch(addUser(user)))
           .then(done)
    }
})

const fetchUserLogic = createLogic({
    type: FETCH_USER,
    process({ action, API }, dispatch, done) {
        API.getPosts(action.id)
           .then(posts => dispatch(addPosts(posts)))
           .then(done)
    }
})

export default [
    userChangedLogic,
    fetchUsersLogic,
    fetchUserLogic,
    fetchPostsLogic
]