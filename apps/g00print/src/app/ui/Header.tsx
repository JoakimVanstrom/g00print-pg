import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.jpg";
import "./header.scss";
import { useSelector } from "react-redux";
import LoginModal from "../modal/LoginModal";




const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = window.localStorage.getItem("isLoggedIn");
    const user = useSelector((state: any) => state.user.user);

  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
    };

const logoHandler = () => {
    navigate("/");
};

const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
};




    return (
        <div className="headerWrapper">
            <img src={logo} alt="logo" onClick={logoHandler} />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        {isLoggedIn === "true" ? (
                            <Link to="/" onClick={handleLogout}> {user?.name} </Link>
                        ) : (<div onClick={openModal}>
                            <div className="loginBtn">
                            login
                            </div>
                            {isModalOpen &&
                            <LoginModal />
                            }
                        </div>
                        )}
                    </li>
                </ul>
            </nav>
         </div>
    );

    };

export default Header;