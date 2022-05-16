import styled from 'styled-components';
import { Link } from 'react-router-dom';
import infoIcon from './components/eye-icon.png';

export default function Product ( props ) {

    return (

        <ProductContainer>
            <img src={props.img} alt={props.name} height={120} width={80}/>
            <ProductDescription>{props.small_description}</ProductDescription>
            <ProductFooter>
                <InfoLink to={'/produc-info'}>{infoIcon}</InfoLink>
                <ProductPrice>{props.price}</ProductPrice>
            </ProductFooter>
        </ProductContainer>

    );

}

const ProductContainer = styled.div`    

    height: 250px;
    width: 150px;

    background-color: blue;
    border-radius: 25px;

    z-index: 1;

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