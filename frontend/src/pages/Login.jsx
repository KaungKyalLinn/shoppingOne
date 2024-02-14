import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset,login } from "../features/admin/adminSlice";

const Login = () => {

  const {adminUser, isLoading, isSuccess, isError, massage} = useSelector((state) => state.admin)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    userName : "",
    password : ""
  })

  useEffect(() => {
    if(isError){
      console.log("login failed..")
    }
    if(isSuccess || adminUser){
      navigate("/admin/dashboard")
    }
  }
  ,[adminUser, isSuccess, isError, massage, dispatch, navigate])

  const onChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(!user.userName || !user.password){
      console.log("please fill all the fields")
    }
    if(user.userName && user.password){
      const userData = {
        userName : user.userName,
        password : user.password
      }
      dispatch(login(userData))

      user.userName = "";
      user.password = "";
    }
  }

  if(isLoading){
    return(
      <div className="centerPage">
        <div>Loading ...</div>
      </div>
    )
  }

  return (
    <div className='pages loginPage'>
      <div className="loginDiv">
        <h1 className="loginHeader">Login admin account</h1>
        <form className="loginForm" onSubmit={onSubmit}>
          <input type="text" required className="input userName" name='userName' placeholder='User name' value={user.userName} onChange={onChange}/>
          <input type="password" required className="input password" name="password" placeholder='Password' value={user.password} onChange={onChange}/>
          <button className="btn loginBtn">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login