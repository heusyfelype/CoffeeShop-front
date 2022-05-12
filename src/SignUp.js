import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

import img from './components/background-signup.jpg'

export default function SignUp() {

    const navigate = useNavigate()

    const [signUpData, setSignUpData] = useState({})

    return (

        <MainStyled>
            <TitleStyled>CoffeeShop</TitleStyled>
            <form>
                <InputStyled
                    type="text"
                    placeholder=' Nome'
                    name="name"
                    value={signUpData.name}
                    onChange={e => { setSignUpData({ ...signUpData, name: e.target.value }) }}
                />

                <InputStyled
                    type="text"
                    placeholder=' Email'
                    name="email"
                    value={signUpData.email}
                    onChange={e => { setSignUpData({ ...signUpData, email: e.target.value }) }}
                />

                <InputStyled
                    type="text"
                    placeholder=' Senha'
                    name="password"
                    value={signUpData.password}
                    onChange={e => { setSignUpData({ ...signUpData, password: e.target.value }) }}
                />

                <InputStyled
                    type="text"
                    placeholder=' Confirmar senha'
                    name="confirm_password"
                    value={signUpData.confirm_password}
                    onChange={e => { setSignUpData({ ...signUpData, confirm_password: e.target.value }) }}
                />

                <button type="submit"> Confirmar </button>

            </form>
            <Link to={"/"}> Já possui conta? </Link>
        </MainStyled>

    );

}

const MainStyled = styled.main`
    width: 100vw;
    height: 100vh;
    padding: 10vh 10vw;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    background-image: url(${img});
    background-size: cover;
    background-position: 40%;
    filter: blur(5px);
    z-index: 0;
    
    form{
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        gap: 1%;
        filter: none;
        
    }

    a{
        text-align: center;
    }
`

const TitleStyled = styled.h1`
    text-align: center;
    font-family: Noto Serif Display, sans-serif;
    font-weight: 700;
    font-size: 40px;
    color: #EADDCA;
    z-index: 1;
    
`

const InputStyled = styled.input`
    width: 100%;
    filter: none !important;
    z-index: 1;
`