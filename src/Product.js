import styled from 'styled-components';

export default function Product ( props ) {

    return (

        <ProductContainer>
            <ProductImage>
                <img src={props.img} alt={props.name} height={180} width={180}/>
            </ProductImage>
            <ProductDescription>{props.small_description}</ProductDescription>
            <ProductFooter>
                <Info>ⓘ</Info> 
                <ProductPrice>R${props.price}0</ProductPrice>
            </ProductFooter>
        </ProductContainer>

    );

}

const ProductContainer = styled.div`    

    height: 250px;
    width: 150px;

    display: flex;
    flex-direction: column;

    background-color: #FFFFFF;
    border-radius: 25px;
    overflow: visible;

`;

const ProductImage = styled.div`

    margin-top: -10px;
    margin-left: -15px;
    z-index: 2;

`;

const ProductDescription = styled.div`

    padding-left: 5px;
    padding-right: px;
    max-height: 27px;
    font-size: 12px;
    color: grey;
    overflow-x: scroll;

`;

const ProductFooter = styled.div`
    
    margin-top: 25px;
    height: 15px;
    width: 150px;

`;

const ProductPrice = styled.div`

    margin-left: 55px;
    margin-top: -20px;
    font-size: 22px;
    color: #adadad;

`;

const Info = styled.div`

    margin-left: 15px;
    color: #adadad;

`;