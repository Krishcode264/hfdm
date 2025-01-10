
import axios from "axios";


//some chnage

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    "Content-Type": "application/json", 
    Accept: "application/json",
  },
  withCredentials: true,
});






export default Api;
