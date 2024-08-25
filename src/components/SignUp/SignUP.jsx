import { useEffect, useState } from 'react';
import './SignUp.css'
import { useDispatch, useSelector } from 'react-redux';
import {  signUp } from '../../Services/Action/taskAction';
import { useNavigate } from 'react-router';

function SignUP() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const isSignUp=useSelector(state=>state.taskReducer.isSignUp)

  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",

  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signup.password === signup.confirmpassword) {
      console.log(signup, 'signup success');
      dispatch(signUp(signup.email,signup.confirmpassword));
    } else {
      alert('password not match')
    }
  }

  

  useEffect(()=>{
    if(isSignUp){
      navigate('/');
    }
  },[isSignUp,navigate])

  return (
    <>
      <div className="loginform mb-5">
        <div className="row main-content d-flex text-center ms-5 mt-3">
          
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
              <div className="row">
                <h2>Sign Up</h2>
              </div>
              <div className="row">
                <form className="form-group">
                  <div className="row">
                    <input type="text" name="name" className="form__input" placeholder="Username" onChange={handleInput} />
                  </div>
                  <div className="row">
                    <input type="text" name="email" className="form__input" placeholder="email" onChange={handleInput} />
                  </div>
                  <div className="row">
                    <input type="password" name="password" className="form__input" placeholder="Password" onChange={handleInput} />
                  </div>
                  <div className="row">
                    <input type="password" name="confirmpassword" className="form__input" placeholder="confirmpassword" onChange={handleInput} />
                  </div>
                  <div className="row mb-4">
                    <input type="submit" value="Submit" className="btn submit-btn " onClick={handleSubmit} />
                    {/* <p><button type='submit' className='border-0 bg-white' onClick={handleLogin}>Log In with <FcGoogle className='fs-2' /> </button></p> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUP
