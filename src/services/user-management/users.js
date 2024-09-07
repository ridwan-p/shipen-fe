import app from '../../configs/app';
import axios from "axios"

export const getUsers = () => {
  return axios.get(`${app.apiUrl}/data/user-management/users.json`)
}