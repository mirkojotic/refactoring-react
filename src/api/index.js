import axios from 'axios'

const get = url => axios.get(url).then(res => res.data)
        
const getUsers = () => get('https://jsonplaceholder.typicode.com/users')
const getUser = id => get(`https://jsonplaceholder.typicode.com/users/${id}`)
const getPosts = id => get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

export default {
    getUsers,
    getUser,
    getPosts
}