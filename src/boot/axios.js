import axios from 'axios'



export default async ({ Vue }) => {
  Vue.prototype.$axios = axios
  axios.defaults.baseURL = 'http://67.205.141.163:3000'
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token
  
 
}

