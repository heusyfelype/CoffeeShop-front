import specials from './components/graos.png';
import coffeeMachines from './components/cafeteira.png';
import cup from './components/xicara_1.png';
import shadow from './components/shadow_1.png';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

export default function Category () {

    const [selectedCategory, setSelectedCategory] = useState('');

    const config = {

        headers: {
            category: selectedCategory 
        }

    };

    function getCategory () { 

        const promise = axios.get('htttp://localhost:5000/category/', config);

        promise.then(response => {

            const { data } = response;
            console.log(data);

        });

        promise.catch((e) => {

            console.log(e);
            alert('Ocorreu um erro! Por favor, selecione novamente a categoria desejada.');

        });

    } 

    return (

        <CategoryContainer>
            <CafésEspeciais onClick={() => {
                setSelectedCategory('cafés especiais');
                getCategory();
                }}>
                {/* <BackChange></BackChange> */}
                <CaféVetor>
                    <img src={specials} height={45} width={45}/>
                </CaféVetor>
                <Shadow>
                    <img src={shadow} height={10} width={55}/>
                </Shadow>
                <CategoryName>Cafés Especiais</CategoryName>
            </CafésEspeciais>
            <Cafeteiras onClick={() => {
                setSelectedCategory('cafeteiras');
                getCategory();
                }}>
                {/* <BackChange></BackChange> */}
                <CafeteiraVetor>
                    <img src={coffeeMachines} height={45} width={45}/>
                </CafeteiraVetor>
                <Shadow>
                    <img src={shadow} height={10} width={55}/>
                </Shadow>
                <CategoryName>Cafeteiras</CategoryName>
            </Cafeteiras>
            <XícarasExclusivas onClick={() => {
                setSelectedCategory('xícaras exclusivas');
                getCategory();
                }}>
                {/* <BackChange></BackChange> */}
                <XícaraVetor>
                    <img src={cup} height={45} width={45}/>
                </XícaraVetor>
                <Shadow>
                    <img src={shadow} height={10} width={55}/>
                </Shadow>
                <CategoryName>Xícaras Exclusivas</CategoryName>
            </XícarasExclusivas>
        </CategoryContainer>

    );

}

const CategoryContainer = styled.div`

    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;    

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    height: 120px;
    width: fit-content;

    background-color: cian;

`;

const BackChange = styled.div`

    margin-top: -3px;
    position: absolute;
    height: 105px;
    width: 105px;
    border-radius: 25px;
    background-color: #cd7f32;
    opacity: 0.5;

`;

const CafésEspeciais = styled.div`

    margin-top: 50px;   

    display: flex;
    align-items: center;
    flex-direction: column;

    height: 105px;
    width: 105px;

    font-family: 'Roboto', sans-serif;

    border: 3px solid grey;
    border-radius: 25px;

    z-index: 1;

`;

const Cafeteiras = styled.div`

    margin-top: 50px;       

    display: flex;
    align-items: center;
    flex-direction: column;

    height: 105px;
    width: 105px;

    font-family: 'Roboto', sans-serif;

    border: 3px solid grey;
    border-radius: 25px;

    z-index: 1;

`;

const XícarasExclusivas = styled.div`

    margin-top: 50px; 

    display: flex;
    align-items: center;
    flex-direction: column;

    height: 105px;
    width: 105px;

    border: 3px solid grey;
    border-radius: 25px;

    z-index: 1;

`;

const CaféVetor = styled.div`

    padding-top: 10px;    

`;

const CafeteiraVetor = styled.div`

    padding-top: 10px;    
    padding-left: 5px;

`;

const XícaraVetor = styled.div`

    padding-top: 10px;    
    padding-left: 7px;

`;

const Shadow = styled.div`

    margin-top: -7px;

`;

const CategoryName = styled.div`

    margin-left: 30px;
    margin-right: 30px;
    color: grey;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: bold;

`;