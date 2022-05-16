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
            category: "cafés especiais" 
        }

    }; 

    useEffect (() => {

        getProducts();

    }, []);

    function getProducts () {

        const promise = axios.get('http://localhost:5000/category-products', config );
        
        promise.then (response => {

            const {data} = response;
            setProducts(data);
            console.log(data)

        })
        promise.catch ((e) => {

            console.log(e.response);
            alert ('Algo deu errado. Por favor, tente novamente.');

        });

    }

    function showProducts () {

        return products.map(product => {

            const { _id, name, small_description, price, img} = product;

            return (
                
                <>
                    <Product _id={_id} name={name} small_description={small_description} price={price} img={img}/>
                </>

            );

        });

    }

    return (

        <WelcomeStyled>
            <Header />
            <ProductsStyled>
                {showProducts()}
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

    margin-top: 200px;
    margin-left: 20px;   

    display: flex;
    justify-content: space-between;
    gap: 20px;

    height: 250px;
    width: 92vw;

    overflow-y: scroll;

`;

