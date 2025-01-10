
import axios from "axios";


//some chnage

const Api= axios.create({
  baseURL: process.env.API_BASE_URL,
  withCredentials:true
  
});






export default Api;
