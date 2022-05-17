import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import api from './api';

import img from './components/background-signup.jpg'

export default function SignUp() {

    const navigate = useNavigate()

    const [signUpData, setSignUpData] = useState({})

    function sendNewUser(e){
        e.preventDefault();
        const request = api.post('/sign-up', signUpData);

        request.then((response) => {
            alert("Cadastro feito com sucesso!")
            navigate("/")
        })
        request.catch((response) => {
            alert(
                `Algo deu errado, por favor recarregue a página e tente novamente!
       
                Erro: ${response}`
            );
        }
        )
    }

    return (

        <>
            <BlurStyled />
            <MainStyled>
                <TitleStyled>CoffeeShop</TitleStyled>
                <form onSubmit={sendNewUser} >
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
                        type="password"
                        placeholder=' Senha'
                        name="password"
                        value={signUpData.password}
                        onChange={e => { setSignUpData({ ...signUpData, password: e.target.value }) }}
                    />

                    <InputStyled
                        type="password"
                        placeholder=' Confirmar senha'
                        name="confirm_password"
                        value={signUpData.confirm_password}
                        onChange={e => { setSignUpData({ ...signUpData, confirm_password: e.target.value }) }}
                    />

                    <button type="submit"> Confirmar </button>

                </form>
                <Link to={"/"}> Já possui conta? </Link>
            </MainStyled>
        </>

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
    z-index: 0;
    
    form{
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        gap: 1%;
        filter: none;
        z-index: 2;
        
    }
    
    button{
        height: 70px;
        width: 100%;
        border: none;
        background-color: #7b716aff;
        color: #EADDCA;
        font-family: 'Roboto', sans-serif;
        border-radius: 100px;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
    }

    a{
        margin-top: 10px;
        text-align: center;
        z-index: 2;
        text-decoration: none;
        color: #EADDCA;
        font-family: 'Roboto', sans-serif;
        cursor: pointer;
    }

`

const TitleStyled = styled.h1`
    text-align: center;
    font-family: Noto Serif Display, sans-serif;
    font-weight: 800;
    font-size: 40px;
    color: #EADDCA;
    z-index: 2;
    
`

const InputStyled = styled.input`
    z-index: 2;

    height: 70px;
    width: 100%;
    border: none;
    border-radius: 100px;
    background-color: #EADDCA;
    color: #7b716aff;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
`

const BlurStyled = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.67) 15%, rgba(0,0,0,0.33) 88%);
`