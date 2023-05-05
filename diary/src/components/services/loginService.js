import axios from 'axios'
const baseUrl = ''./api/login''

const login2 = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}
console.log("login")

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}
export default { login2, setToken }
