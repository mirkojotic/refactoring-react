export const USER_CHANGED = 'USER_CHANGED'
export const FETCH_USERS = 'FETCH_USERS'
export const ADD_USERS = 'ADD_USERS'
export const FETCH_USER = 'FETCH_USER'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POSTS = 'ADD_POSTS'
export const REMOVE_POSTS = 'REMOVE_POSTS'

export const userChanged = id => ({ type: USER_CHANGED, id })
export const fetchUsers = () => ({ type: FETCH_USERS })
export const addUsers = users => ({ type: ADD_USERS, users })
export const fetchUser = id => ({ type: FETCH_USER, id })
export const addUser = user => ({ type: ADD_USER, user })
export const removeUser = () => ({ type: REMOVE_USER })
export const fetchPosts = id => ({ type: FETCH_POSTS, id })
export const addPosts = posts => ({ type: ADD_POSTS, posts })
export const removePosts = () => ({ type: REMOVE_POSTS })