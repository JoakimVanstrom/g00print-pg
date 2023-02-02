// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import getUsers from "../api/getUsers";
// import { UserInterface } from "@g00-print/g00print-lib";
import logo from "../../assets/logo.jpg";
import styled from "styled-components";

// const [users, setUsers] = useState<UserInterface[]>([]);

// console.log(users);

// useEffect(() => {

//     getUsers().then(users => {
//         setUsers(users)
//     })
// },[]) ;


const Header = () => {

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    img {

    }
    nav {
        ul {
            display: flex;
            flex-direction: row;
            list-style: none;
            margin: 0;
            padding: 0;
            li {
                margin-left: 1rem;
                a {
                    text-decoration: none;
                    color: #000;
                    font-size: 1rem;
                    font-weight: 400;
                    &:hover {
                        color: #007bff;
                    }
                }
            }
        }
    }
`;




    return (
        <HeaderContainer>
            <img src={logo} alt="logo" />
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
                        <Link to="/auth">Login</Link>
                    </li>
                </ul>
            </nav>
         </HeaderContainer>
    );

    };

export default Header;