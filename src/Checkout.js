import styled from 'styled-components';
import Modal from './Modal';

export default function Checkout () {

    return (

        <CheckoutContainer>
            <Modal />
        </CheckoutContainer>

    );

}

const CheckoutContainer = styled.div`

    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: #EADDCA;;

`;