import styled from 'styled-components';

export default function Footer () {

    return (
        
        <FooterContainer>
            Selecione algo para comprar<br /> com a gente! ♡
        </FooterContainer>

    );

}

const FooterContainer = styled.div`

    position: fixed;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 170px;
    width: 100vw;

    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    color: white;

    background-color: grey;

    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

`;