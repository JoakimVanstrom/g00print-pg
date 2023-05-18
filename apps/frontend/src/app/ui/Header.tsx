import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import transparentLogo from '../../assets/transparent-logo.png';
import './header.scss';
import { useSelector } from 'react-redux';
// import LoginModal from '../modal/LoginModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = window.localStorage.getItem('isLoggedIn');
  const user = useSelector((state: any) => state.user.user);
  const burger = findIconDefinition({ prefix: 'fas', iconName: 'bars' });

  console.log(user);

  //   const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const menuHandler = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  //   const openModal = () => {
  //     setIsModalOpen(!isModalOpen);
  //   };

  const logoHandler = () => {
    navigate('/');
  };

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="headerWrapper" id="top">
      <img src={transparentLogo} alt="logo" onClick={logoHandler} />
      {isBurgerOpen && (
          <nav className="burgerMenu">
            <ul>
              <li>
                <a href="#About" onClick={menuHandler}>
                  Om oss
                </a>
              </li>
              <li>
                <a href="#Service" onClick={menuHandler}>
                  Tjänster
                </a>
              </li>
              <li>
                <a href="#Contact" onClick={menuHandler}>
                  Kontakta oss
                </a>
              </li>
              <li>
                {isLoggedIn === 'true' ? (
                  <Link to="/" onClick={handleLogout}>
                    {' '}
                    {user?.name}{' '}
                  </Link>
                ) : (
                    <Link
                      to="/login"
                      className="loginBtn"
                      onClick={menuHandler}
                      title="Logga in endast för admin"
                    >
                      Logga in
                    </Link>
                )}
              </li>
            </ul>
        </nav>
      )}
      <div className="burger">
        <FontAwesomeIcon icon={burger} onClick={menuHandler} />
      </div>
      <div className="navBigScreen">
      <nav>
        <ul>
          <li>
            <a href="#About">Om oss</a>
          </li>
          <li>
            <a href="#Service">Tjänster</a>
          </li>
          <li>
            <Link to="#Contact">Kontakt</Link>
          </li>
          <li className="loginNav">
            {isLoggedIn === 'true' ? (
              <Link to="/" onClick={handleLogout}>
                {' '}
                {user?.name}{' '}
              </Link>
            ) : (
                <Link to="/login" className="loginBtn"  title="Logga in endast för admin">
                  Logga in
                </Link>
            )}
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default Header;
