import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/login'

/**
 * Login request
 * @param {string, string} credentials Username and Password
 * @returns Logged in user data (Incl. token, user_id and username)
 */
const login = async credentials => {
  const { data } = await axios.post(baseUrl, credentials)
  return data
}

export { login }
