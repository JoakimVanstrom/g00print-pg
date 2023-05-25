import { useState, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/loginView.scss'
import { useDispatch } from 'react-redux';
import { authActions } from '../store/slicers/auth';



const LoginView = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
    const navigate = useNavigate();




  const dev = 'localhost';
  const prod = '68.183.32.241'

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .post(`http://${prod}:3333/api/login`, {
        email: user,
        password: pwd,
      })
      .then((res) => {
        window.localStorage.setItem('token', res.data);
        window.localStorage.setItem('isLoggedIn', 'true');
        dispatch(authActions.setToken(res.data));

        navigate("/getUser");
      })
      .catch((err) => {
        console.log(err);
      });

      setTimeout(() => {
       window.localStorage.clear();
       window.location.reload();
      }, 60 * 60 * 1000);
   
  };

  const handleNotAdmin = () => {
    navigate('/')
  }

  return (
    <section>
    <article className="login-wrapper">
        <h1>Sign In</h1>
       <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          placeholder="Enter your Email"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder='Enter your Password'
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button className="login-btn">Sign In</button>
      </form>
    </article>
    <article className="notAdmin">
      <p>Are you not an admin?</p>
      <p onClick={handleNotAdmin}>Press <u>here</u> to go back</p>
    </article>

    </section>
  );
};

export default LoginView;
