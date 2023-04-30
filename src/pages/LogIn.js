import { useState, useRef, useContext, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../store/cart-context';
import Button from 'react-bootstrap/Button';

const LoginPage = () => {
    const history = useHistory();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const authCtx = useContext(CartContext);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };



    const submitHandler = async (event) => {
      try {
        event.preventDefault();
        console.log(123)
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);

        let url;
        if (isLogin) {
          url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJcKdKgNXBmi8H7bIsabHyCeE4hYGXTaM';
        }
        else {
          url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJcKdKgNXBmi8H7bIsabHyCeE4hYGXTaM';
        }

        const respone = await fetch(url,
          {
            method: 'POST',
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          })

        setIsLoading(false);
        if (respone.ok) {
          const data = await respone.json();
          
          authCtx.login(data.idToke);
          history.replace('/store');
        }
        else {
          const data = await respone.json()
          let errorMessage = 'Authentication failed!';
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        }
      }

      catch (error) {
        alert(error.message);
      }
    }

  return (
    <Fragment><br />
      {/* <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section> */}

      <div className="row justify-content-center">
        <h1 className="text-center">{isLogin ? 'Login' : 'Sign Up'}</h1><br/><br /><br/><br/>

        <div className="col-md-4">
          <form id="loginform" onSubmit={submitHandler}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required ref={emailInputRef}
              />
            </div><br/>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required ref={passwordInputRef}
              />
            </div><br/>
            <div className="d-grid gap-2">
            {!isLoading && <Button type="submit" variant="primary" size="lg">
               {isLogin ? 'Login' : 'Create Account'}
              </Button>}{isLoading && <p>Sending request...</p>}<br/>
              <Button variant="link" size="lg" onClick={switchAuthModeHandler}>
              {isLogin ? 'Create new account' : 'Login with existing account'}
              </Button><br/>
            </div>

          </form><br/><br/><br/>
        </div>
      </div>

    </Fragment>

  );
};

export default LoginPage;