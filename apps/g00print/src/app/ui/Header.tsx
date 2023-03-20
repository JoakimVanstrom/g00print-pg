// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import getUsers from "../api/getUsers";
// import { UserInterface } from "@g00-print/g00print-lib";
import logo from "../../assets/logo.jpg";
import "./header.scss";

// const [users, setUsers] = useState<UserInterface[]>([]);

// console.log(users);

// useEffect(() => {

//     getUsers().then(users => {
//         setUsers(users)
//     })
// },[]) ;


const Header = () => {
    const navigate = useNavigate();



const logoHandler = () => {
    navigate("/");
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
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li></li>
                </ul>
            </nav>
         </div>
    );

    };

export default Header;