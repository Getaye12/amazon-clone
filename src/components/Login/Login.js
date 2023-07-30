import React, {useState} from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
export default function Login() {

    const navigate = useNavigate();

//////======sign in==========///
    const login = (e) => { 
        e.preventDefault() //stops refresh
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate('/');
            })
            .catch((e) => alert(e.message));
    }

    const register = (e) => { 
        e.preventDefault() //stops refresh
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    // REMARK HERE ==instade of=== navigate.push('/')==== we should use
                    ////====== navigate('/');
                    navigate('/');
                    // create and redirect to homepage
                    // toast.success(`Registration Successful, redirecting to homepage`);
                    // setTimeout(function () { navigate("/") }, 1000);
                }
            })
            .catch((e) => console.log(e.message));
            
    }

    // const loginWithGoogle = (e) => { 
    //     e.preventDefault() //stops refresh
    // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
      <div className="login">
           <Link to="/">
         <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                  alt=""
               />
              </Link>
           <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                  />
                   <button onClick={login} className="login__signInButton">Sign In</button>
                   
              </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register} className="login__registerButton">Create your amazon account</button>
              <br />
               
                <a
                    className="login__signInGoogleButton"
                    // onClick={loginWithGoogle}
                > 
                    <img
                        className="login__signInGoogleIcon"
                        src="https://elearnam.com/assets/frontend/elegant/images/gicon.png"
                        alt="" />
               </a> 
            </div>
    </div>
  )
}
