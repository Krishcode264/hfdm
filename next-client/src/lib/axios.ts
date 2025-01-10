
import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; 

//some chnage
const name="krishnaef4erfrgfr"
const Api= axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials:true
  
});






export default Api;
