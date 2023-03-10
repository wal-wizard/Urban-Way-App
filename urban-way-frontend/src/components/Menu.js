import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import 'animate.css';

const Menu = () => {
    const [isNavExpanded, setIsNavExpanded] = React.useState(true);

    return (
        <MENU>
            <i className="bi bi-list animate__animated animate__backInDown" id="btn-canva-control" onClick={() => {setIsNavExpanded(!isNavExpanded);}}></i>

            <nav className={isNavExpanded ? "canva-toggler" : "normal"}>
                <a href="#home">
                    <img src={require("./img/logo.png")} class="logo-img" alt="logo" />
                </a>
                <ul>
                    <li>
                        <a href="#descubra">
                            <i class="bi bi-heart-fill"></i> Descubra
                        </a>
                    </li>

                    <li>
                        <a href="#precos">
                            <i class="bi bi-currency-dollar"></i> Preços
                        </a>
                    </li>
                    <li>
                        <a href="/cadastro">
                            <Link to={"/register"}>
                                <i class="bi bi-person"></i> Cadastre-se
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="/login">
                            <Link to={"/login"}>
                                <i class="bi bi-door-open"></i> Login
                            </Link>
                        </a>
                    </li>
                </ul>
            </nav>
        </MENU>

    )
}

const MENU = styled.div`
    height: 100vh;
    position: fixed;
    z-index: 30;


    #btn-canva-control {
        font-size: 50px;
        cursor: pointer;
        z-index: 2;
        position: fixed;
        top: 20px;
        left: 10px;
        color: #fff;
        background-color: #232324;
        border-radius: 10px;
    }

    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

    @import url("https://fonts.googleapis.com/css2?family=Carter+One&display=swap");

    .canva-toggler {
        height: 100vh;
        width: 270px;
        background-color: #232324;
        position: fixed;
        z-index: 1;
        top: 0;
        left: -270px;
    }

    .normal {
        background-color: #232324;
        left: 270px;
        height: 100vh;
    }

    a {
    text-decoration: none;
    color: #fff;
    font-family: "Roboto", sans-serif;
    }

    .logo-img {
    width: 270px;
    position: relative;
    top: 8%;
    transition: all 0.5s;
    }

    ul {
    position: relative;
    top: 50px;
    }

    ul > li {
    list-style: none;
    color:#fff;
    font-size: 22px;
    margin-top: 70px;
    margin-left: -1px;
    text-transform: uppercase;
    }

    ul > li:hover {
    letter-spacing: 2px;
    transition: all 0.8s;
    color:  rgb(120, 197, 171);
    cursor: pointer;
    }
    a:hover {
    color:  rgb(120, 197, 171);
    }

`
export default Menu;