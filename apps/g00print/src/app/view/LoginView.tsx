import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { authActions } from '../store/slicers/auth';
// import { useDispatch } from 'react-redux';

const LoginView = () => {
  // const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
    const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios
      .post('http://localhost:3333/api/login', {
        email: user,
        password: pwd,
      })
      .then((res) => {
        // dispatch(authActions.setToken(res.data));
        // dispatch(authActions.setIsLoggedIn(true));
        window.localStorage.setItem('token', res.data);
        window.localStorage.setItem('isLoggedIn', 'true');

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });

      setTimeout(() => {
       window.localStorage.clear();
       window.location.reload();
      }, 60 * 60 * 1000);
   
  };

  return (
    <section>
       <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label htmlFor="email">email: </label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button>Sign In</button>
      </form>
    </section>
  );
};

export default LoginView;
