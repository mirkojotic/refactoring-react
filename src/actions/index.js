export const ADD_USERS = 'ADD_USERS'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const ADD_POSTS = 'ADD_POSTS'
export const REMOVE_POSTS = 'REMOVE_POSTS'

export const addUsers = users => ({ type: ADD_USERS, users })
export const addUser = user => ({ type: ADD_USER, user })
export const removeUser = () => ({ type: REMOVE_USER })
export const addPosts = posts => ({ type: ADD_POSTS, posts })
export const removePosts = () => ({ type: REMOVE_POSTS })