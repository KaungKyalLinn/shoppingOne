import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, register } from "../features/admin/adminSlice";

const Register = () => {

  const {adminUser, isLoading, isSuccess, isError, massage} = useSelector((state) => state.admin);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user,setUser] = useState({
    userName : "",
    password : "",
    password2 : ""
  });

  useEffect(() => {

    if(isError){
      console.log(massage)
    }

    if(adminUser || isSuccess){
      navigate("/admin/dashboard")
    }


    dispatch(reset())
  },[adminUser, isSuccess, isError, massage, navigate, dispatch])

  const onChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(user.password !== user.password2){
      console.log("password not match")
    }
    if(user.password === user.password2){
      const userData = {
        userName : user.userName,
        password : user.password
      }
      dispatch(register(userData))

      user.userName = "";
      user.password = "";
      user.password2 = "";
    }
  }

  if(isLoading){
    return(
      <div>loading..</div>
    )
  }

  return (
    <div className='pages'>
      <div className="registerDiv">
        <div className="registerHeaderDiv">
          <h2 className="registerHeader">Register admin account</h2>
        </div>
        <form className="registerForm" onSubmit={onSubmit}>
          <input type="text" className="input userName" name='userName' required placeholder='User name' value={user.userName} onChange={onChange}/>
          <input type="text" className="input password" name="password" required placeholder='Password' value={user.password} onChange={onChange}/>
          <input type="text" className="input password2" name="password2" required placeholder='confirm password' value={user.password2} onChange={onChange}/>
          <button className="btn registerBtn">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register