import specials from './components/graos.png';
import coffeeMachines from './components/cafeteira.png';
import cup from './components/xicara_1.png';
import shadow from './components/shadow.png';
import styled from 'styled-components';

export default function Category () {

    return (

        <CategoryContainer>
            <CafésEspeciais>
                <CaféVetor>
                    <img src={specials} height={45} width={45}/>
                </CaféVetor>
                <Shadow>
                    <img src={shadow} height={25} width={55}/>
                </Shadow>
                <CategoryName>Cafés Especiais</CategoryName>
            </CafésEspeciais>
            <Cafeteiras>
                <CafeteiraVetor>
                    <img src={coffeeMachines} height={45} width={45}/>
                </CafeteiraVetor>
                <Shadow>
                    <img src={shadow} height={25} width={55}/>
                </Shadow>
                <CategoryName>Cafeteiras</CategoryName>
            </Cafeteiras>
            <XícarasExclusivas>
                <XícaraVetor>
                    <img src={cup} height={45} width={45}/>
                </XícaraVetor>
                <Shadow>
                    <img src={shadow} height={25} width={55}/>
                </Shadow>
                <CategoryName>Xícaras Exclusivas</CategoryName>
            </XícarasExclusivas>
        </CategoryContainer>

    );

}

const CategoryContainer = styled.div`

    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;    

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    height: 120px;
    width: fit-content;

    background-color: cian;

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

    margin-top: -20px;

`;

const CategoryName = styled.div`

    margin-left: 30px;
    margin-right: 30px;
    color: grey;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: bold;

`;