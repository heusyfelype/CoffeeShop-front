import styled from 'styled-components';
import { Link } from 'react-router-dom';
import infoIcon from './components/eye-icon.png';

export default function Product ({ name, description, price, img}) {

    return (

        <ProductContainer>
            <ProductImg>
                <img src={img} alt={name} height={120} width={80}/>
            </ProductImg>
            <ProductDescription>{description}</ProductDescription>
            <ProductFooter>
                <InfoLink to={'/produc-info'}>{infoIcon}</InfoLink>
                <ProductPrice>{price}</ProductPrice>
            </ProductFooter>
        </ProductContainer>

    );

}

const ProductContainer = styled.div`

    margin-left: 15px;
    margin-top: 170px;    

    height: 250px;
    width: 150px;

    background-color: blue;
    border-radius: 25px;

    z-index: 1;

`;

const ProductImg = styled.div`

    height: 120px;
    width: 80px;

`;

const ProductDescription = styled.div`

    font-size: 12px;
    color: grey;

`;

const ProductFooter = styled.div`

    height: 15px;
    width: 150px;

`;

const ProductPrice = styled.div`

    font-size: 12px;
    color: black;

`;

const InfoLink = styled(Link)`

    height: 7px;
    width: 7px;

`;