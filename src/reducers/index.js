import {
    ADD_USERS,
    ADD_USER,
    REMOVE_USER,
    ADD_POSTS,
    REMOVE_POSTS
} from '../actions'

const initialState = {
    users: [],
    user: null,
    posts: []
}

export default (state = initialState, action) => {

    switch(action.type) {

        case ADD_USERS:
            return {
                ...state,
                users: action.users
            }

        case ADD_USER:
            return {
                ...state,
                user: action.user
            }

        case REMOVE_USER:
            return {
                ...state,
                user: null,
                posts: []
            }

        case ADD_POSTS:
            return {
                ...state,
                posts: action.posts
            }

        case REMOVE_POSTS:
            return {
                ...state,
                posts: []
            }

        default:
            return state

    }

}