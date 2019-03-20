import axios from 'axios'

export class UsersApi {
    static usersGet() {
        return axios.get('https://localhost:3000/api/users')
    }

    static userCreate(user) {
        return axios.post('https://localhost:3000/api/users', user)
    }

    static userDelete(userId) {
        return axios.delete(`https://localhost:3000/api/users/${userId}`)
    }
}