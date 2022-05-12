import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LoadingSpin from 'react-loading-spin';
import axios from 'axios';
import Background1 from './Background-1';
import styled from 'styled-components';

export default function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function loginUser () {

        setLoading(true);

        const promise = axios.post('http://localhost:5000/login', {
            email,
            password
        })

        promise.then (response => {
            setLoading(false);
            const { data } = response;
            console.log(data);
            navigate('/welcome-page');
        })

        promise.catch((e) => {
            setLoading(false);
            console.log(e);
            alert('Algo deu errado. Por favor, insira seus dados, e tente novamente.');
        })
    }

    return (

        <LoginContainer>
            <Background1 />
            <ShopLogo>Coffee Shop</ShopLogo>
            <InputsContainer>
                <Input type={'text'} placeholder={'Email'} value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input type={'password'} placeholder={'Senha'} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </InputsContainer>
            <Button onClick={loginUser}>
                {loading ? (<LoadingSpin primaryColor={'#FFFFFF'} secondaryColor={'transparent'} size={'35px'} width={8} />
                    ) : (
                        'Entrar'        
                    ) 
                }</Button>
            <StyledLink to='/sign-up'>Ainda não tem conta?</StyledLink>
        </LoginContainer>

    );

}

const LoginContainer = styled.div`

    height: 100vh;
    width: 340px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;

`;

const StyledLink = styled(Link)`

    height: 15px;
    width: 340px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
    z-index: 1;

`;

const ShopLogo = styled.div`

    font-family: Noto Serif Display, sans-serif;
    font-size: 40px;
    color: #EADDCA;
    z-index: 1;

`;

const InputsContainer = styled.div`

    margin-top: 350px;
    background-color: transparent;
    z-index: 1;

`;