import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

function Modal ({ price, address, buyer }) { //Dados recebidos da tela de confirmação de pedido

    const navigate = useNavigate();

    const order = {price: '', address: '', buyer: ''};

    function sendOrder () { //Enviar os dados do pedido pro back

        const promise = axios.post('http://localhost:5000/', order);

        promise.then(response => {

            const { data } = response;
            console.log(data);

        });

        promise.catch((e) => {

            console.log(e);

        });

    }
    
    return (

        <ModalContainer>
            <ModalTitle>Ficamos felizes que tenha encontrado o que precisava!</ModalTitle>
            <BuyInfo>Vamos entregar a compra de R${price.replace(".", ",")} em {address} para {buyer}</BuyInfo>
            <Confirmation>
                <ConfirmButton onClick={() => {
                    navigate('/welcome-page');
                    sendOrder();
                    }}>Confirmar</ConfirmButton>
            </Confirmation>
        </ModalContainer>

    );

}

export default Modal;

const ModalContainer = styled.div`

    margin-left: auto;
    margin-right: auto;
    width: 248px;
    height: 210px;
    display: flex;
    flex-direction: column;
    background: green;
    border-radius: 12px;
    z-index: 2;

`;

const BuyInfo = styled.div`

    margin-top: 5px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;

`;

const ConfirmButton = styled.div`

    width: 95px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: grey;
    border-radius: 8px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #FFFFFF;

`;

const ModalTitle = styled.div`

    margin-top: 35px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;

`;

const Confirmation = styled.div`

    margin-top: 35px;
    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: center;

`;