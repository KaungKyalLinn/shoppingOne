import axios from "axios"

const url = "/admin/";

const register = async (admin) => {
  const response = await axios.post(url + "register/", admin);
  if(response.data){
    localStorage.setItem("admin", JSON.stringify(response.data))
  }
  return response.data
}

const login = async (admin) => {
  const response = await axios.post(url + "login/", admin);
  if(response.data){
    localStorage.setItem("admin", JSON.stringify(response.data))
  }
  return response.data
}

const adminService = {
  register,
  login
}

export default adminService;