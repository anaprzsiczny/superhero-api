import axios from "axios"

const baseApiURL = "https://www.superheroapi.com/api.php/3931412933547381/search"

const api = axios.create({
  baseURL: baseApiURL
})

export default api
