import { Link, useNavigate } from 'react-router-dom'
import './LogIn.css'
import { useDispatch, useSelector } from 'react-redux'
import { googleLogIn, Login} from '../../Services/Action/taskAction';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';


function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector(state => state.taskReducer)
  const [logIn, setLogIn] = useState({
    email: '',
    password: '',
  })

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogIn({ ...logIn, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Login(logIn.email,logIn.password))
    if (isLogin) {
      navigate('/home');
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(googleLogIn());
    if (isLogin) {
      navigate('/home');
    }
  }

  // useEffect(() => {
  //   if (isLogin) {
  //     console.log('loog succ')
  //   }
  // })
  return (
    <>
      <div className="loginform mb-5">
        <div className="row main-content text-center">
          {/* <div className="col-md-4 col-xs-12 col-sm-12 text-center company__info">
            <span className="company__logo">
              <h1>Hello, Friend!</h1>
              <p className='text-white'>Enter your personal details and start your journey with us</p>
            </span>
          </div> */}
          <div className="col-12 col-md-12 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
              <div className="row">
                <h2>Log In</h2>
              </div>
              <div className="row">
                <form className="form-group">
                  <div className="row">
                    <input type="text" name="email" className="form__input" placeholder="email" onChange={handleInput} />
                  </div>
                  <div className="row">
                    <input type="password" name="password" className="form__input" placeholder="Password" onChange={handleInput} />
                  </div>
                  <div className="">
                    <input type="submit" value="Submit" className="btn text-white rounded-pill submit-btn" onClick={handleSubmit} />
                    <p><button type='submit' className='border-0 bg-white text-black ps-2 border-1' onClick={handleLogin}><FcGoogle className='fs-2 pe-1' />Google </button></p>
                  </div>
                </form>
              </div>
              <div className="row">
                <p className='text-black'>Dont have an account? <Link to={'/signup'}>Register Here</Link></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default LogIn
