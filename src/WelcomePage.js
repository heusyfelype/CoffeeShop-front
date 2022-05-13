import { useState } from 'react';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import Category from './Category';
import styled from 'styled-components';
import axios from 'axios';

export default function WelcomePage () {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(false);

    const config = {

        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token_ID'))}`
        }

    };

    useEffect (() => {

        getProducts();

    }, []);

    function getProducts () {

        const promise = axios.get ('http://localhost:5000/welcome-page', config);
        promise.then (response => {
            const {data} = response;
            setProducts(data);
        })
        promise.catch (err => {
            console.log(err.response);
            alert ('Algo deu errado. Por favor, tente novamente.');
        });

    }
    


    return (

        <WelcomeStyled>
            <Header />
            <ProductsStyled>
                {setProducts.map(product => (<Product {...product}/>))}
            </ProductsStyled>
            <Category />
            <Footer />
        </WelcomeStyled>

    );

}

const WelcomeStyled = styled.div`

    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #EADDCA;

`;

const ProductsStyled = styled.div`

    height: 250px;
    width: 150px;

`;