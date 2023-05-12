import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import transparentLogo from '../../assets/transparent-logo.png';
import './header.scss';
import { useSelector } from 'react-redux';
import LoginModal from '../modal/LoginModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = window.localStorage.getItem('isLoggedIn');
  const user = useSelector((state: any) => state.user.user);
  const burger = findIconDefinition({ prefix: 'fas', iconName: 'bars' });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const burgerHandler = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const logoHandler = () => {
    navigate('/');
  };

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="headerWrapper">
      <img src={transparentLogo} alt="logo" onClick={logoHandler} />
      {isBurgerOpen && (
        <div className="burgerMenu">
          <ul>
            <li>
              <a href="#About">Om oss</a>
            </li>
            <li>
              <a href="/#Service">Tjänster</a>
            </li>
            <li>
              {isLoggedIn === 'true' ? (
                <Link to="/" onClick={handleLogout}>
                  {' '}
                  {user?.name}{' '}
                </Link>
              ) : (
                <div onClick={openModal}>
                  <div className="loginBtn">Logga in</div>
                  {isModalOpen && <LoginModal />}
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
      <div className="burger">
        <FontAwesomeIcon icon={burger} onClick={burgerHandler} />
      </div>
      <nav className="navBigScreen">
        <ul>
          <li>
            <a href="#About">Om oss</a>
          </li>
          <li>
            <a href="/#Service">Tjänster</a>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li>
            {isLoggedIn === 'true' ? (
              <Link to="/" onClick={handleLogout}>
                {' '}
                {user?.name}{' '}
              </Link>
            ) : (
              <div onClick={openModal}>
                <div className="loginBtn">Logga in</div>
                {isModalOpen && <LoginModal />}
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
