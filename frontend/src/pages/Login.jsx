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
    dispatch(reset())

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
      <div>
        <div>Loading ...</div>
      </div>
    )
  }

  return (
    <div className='pages'>
      <div className="loginDiv">
        <div className="loginHeaderDiv">
          <h2 className="loginHeader">Login admin account</h2>
        </div>
        <form className="loginForm" onSubmit={onSubmit}>
          <input type="text" className="input userName" name='userName' placeholder='User name' value={user.userName} onChange={onChange}/>
          <input type="text" className="input password" name="password" placeholder='Password' value={user.password} onChange={onChange}/>
          <button className="btn loginBtn">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login