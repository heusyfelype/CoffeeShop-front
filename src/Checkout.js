
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import api from './api';


export default function Checkout() {
    const navigate = useNavigate()
    const token_ID = JSON.parse(localStorage.getItem('token_ID'));


    const [productsInCart, setProducsInCart] = useState([[], { total: 0.00 }])

    console.log(productsInCart)


    useEffect(() => {
        const config = {
            headers: { userId: token_ID.id }
        }
        const request = api.get('/cart', config);

        request.then(response => {
            const { data } = response;

            let soma = 0;
            data.forEach(element => {
                soma += element.priceCart
            });

            setProducsInCart([[...data], { total: soma }]);

        })
        request.catch(response => alert(response))
    }, [])


    const [userData, setUserData] = useState({});
    const [validAddress, setValidAddress] = useState(false)

    function requestCep(cep) {
        console.log(cep)
        const promise = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        promise.then(reponse => {
            let { data } = reponse;
            setUserData(userData.cep = cep)
            setUserData({ ...userData, ...data })
            setValidAddress(true)
        })
        promise.catch((e) => {
            setValidAddress(false)
            alert("Cep inválido");
            setUserData({ ...userData, cep: "" })
        })
    }

    return (
        <>

            <MainStyled>
                <ContentsStyled>
                    <HeaderStyled>
                        <h6> Antes de finalizarmos,
                            por favor confira
                            o seu carrinho!
                        </h6>
                        <img src='https://static.vecteezy.com/ti/vetor-gratis/p1/2002247-icone-de-avatar-de-mulher-negra-bonita-gr%C3%A1tis-vetor.jpg' />

                    </HeaderStyled>

                    {productsInCart[0].length === 0 ?
                        "Adicione algum produto ao carrinho" :
                        <ProducsMap productsInCart={productsInCart} setProducsInCart={setProducsInCart} />
                    }

                    <FormStyled >
                        <InputStyled
                            type="text"
                            placeholder=' Quem irá receber a mercadoria?'
                            name="name"
                            value={userData.name}
                            onChange={e => { setUserData({ ...userData, name: e.target.value }) }}
                            required
                        />
                        <InputStyled
                            type="text"
                            placeholder=' CEP (Apenas números)'
                            name="CEP"
                            value={userData.cep}
                            onChange={e => {
                                e.target.value.length < 8 ?
                                    setUserData({ ...userData, cep: e.target.value }) :
                                    requestCep(e.target.value)
                            }
                            }
                        />
                        <AddressStyled >
                            {validAddress ?
                                <p>
                                    {userData.logradouro}
                                    <br />
                                    {userData.bairro}
                                    <br />
                                    {userData.localidade}
                                    <br />
                                    {userData.uf}
                                    <br />

                                </p> :
                                <p>
                                    Informe seu CEP acima!
                                </p>



                            }
                        </AddressStyled>

                        <InputStyled
                            type="number"
                            placeholder=' Número'
                            name="number"
                            value={userData.number}
                            onChange={e => {
                                setUserData({ ...userData, number: e.target.value })
                            }
                            }
                        />
                        <TextArea
                            placeholder=' Alguma observação?'
                            name="Obs"
                            value={userData.obs}
                            onChange={e => {
                                setUserData({ ...userData, obs: e.target.value })
                            }
                            }
                        />
                    </FormStyled>

                    <AtentionStyled>
                        <h6> <Icon icon="icon-park-outline:attention" inline={true} /> Atenção </h6>
                        <p> Por enquanto estamos aceitando apenas o pagamento no momento da retirada do produto! <br/><br/> Agradecemos a compreensão! </p>
                    </AtentionStyled>

                </ContentsStyled>

                <FooterStyled>
                    <p>
                        <Icon icon="bx:cart-alt" color="#f3ebe4" inline={true} /> Total <br /> R$ {productsInCart[1].total.toFixed(2).replace(".", ",")}
                    </p>
                    <button onClick={() => {
                        console.log(productsInCart[1] = {
                            total : productsInCart[1].total,
                            ...userData,
                            userId : token_ID.id
                        })
                        const promise = api.post('/purchase', productsInCart);
                        promise.then(response =>{
                            alert("Compra efetuada!")
                            navigate("/welcome-page")
                        })
                        promise.catch(e =>{
                            alert("Não foi possível efetuar a compra, tente novamente!")

                        })
                    }}>
                        Finalizar compra
                    </button>
                    <button className='forward' onClick={() => { navigate("/welcome-page") }}>
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </button>
                </FooterStyled>
            </MainStyled>


        </>
    );

}





function ProducsMap(props) {
    const { productsInCart, setProducsInCart } = props;
    const token_ID = JSON.parse(localStorage.getItem('token_ID'));


    function refreshQtt(product, action) {

        const productObject = {
            "userId": token_ID.id,
            "productId": product.productId,
            "action": action,
            "qtt": 1
        }
        const promise = api.post('/cart', productObject);
        promise.then(() => {
            const config = {
                headers: { userId: token_ID.id }
            }
            const request = api.get('/cart', config);

            request.then(response => {
                const { data } = response;

                let soma = 0;
                data.forEach(element => {
                    soma += element.priceCart
                });

                setProducsInCart([[...data], { total: soma }]);

            })
            request.catch(response => alert(response))

        })
        promise.catch(response => alert(response))

    }

    return (
        <>
            {productsInCart[0].map((eachProduct) => {
                return (
                    <ProductStyled key={eachProduct._id}>
                        <img src={eachProduct.img} />
                        <h6> {eachProduct.small_description} </h6>
                        <h5> {eachProduct.qtt} X R$ {eachProduct.price.toFixed(2).replace(".", ",")} </h5>
                        <div>

                            <ion-icon name="remove-outline" onClick={() => refreshQtt(eachProduct, 'remove')}></ion-icon>
                            {`          ${eachProduct.qtt}         `}
                            <ion-icon name="add-outline" onClick={() => refreshQtt(eachProduct, 'add')}></ion-icon>
                        </div>
                    </ProductStyled>
                )
            })}
        </>
    )
}


const AtentionStyled = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 70px;
    width: 100%;
    padding: 10px 10px;
    border-radius: 15px;
    border: 2px solid #7b716a;
`

const FormStyled = styled.form`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    z-index: 1;
`

const AddressStyled = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 70px;
    width: 100%;
    padding: 10px 10px;
    border-radius: 15px;
    border: 2px solid #7b716a;

`

const TextArea = styled.textarea`
    z-index: 1;

    height: 200px;
    width: 100%;
    border: none;
    border-radius: 15px;
    background-color: #EADDCA;
    color: #7b716aff;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
`



const ProductStyled = styled.div`

    display: grid;
    grid-template-columns: 3fr 5fr;
    grid-template-rows: minmax(50, 80px) 40px;
    justify-items: center;
    align-items: center;
    gap: 3px;

    position: relative;

    height: 150px;
    border-radius: 15px;

    box-shadow: 0px 30px 80px -35px rgba(0, 0, 0, 0.5);

    padding: 15px;
    margin-top: 40px;

    /* font-family: 'Roboto', sans-serif; */

    img{
        grid-column-start: 1;
        grid-column-end: 2;
        position: absolute;
        top: -40px;
        left: -20px;
        width: 150px;

    }
    h6{
        grid-column-start: 2;
        grid-column-end: 3;
        overflow: scroll;
        max-height: 75px;
    }
    div{

        width: 40%;
        height: 35px;
        border-radius: 15px;

        position: absolute;
        bottom: 15px;
        right: 15px;

        border: 2px solid #7b716a;

        display: flex;
        justify-content: center;
        align-items: center;

        ion-icon{
            margin: 0px 15px;
        }
    }
`



const MainStyled = styled.main`
    background-color: #f3ebe4;
    width: 100vw;
    height: 100vh;
    padding: 15vh 8% ;
    margin-bottom: 30vh;
    overflow-y: scroll;
    font-family: 'Roboto', sans-serif;

`
const HeaderStyled = styled.div`
    height: 10vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 80% 20%;
    justify-content: start;
    gap: 10px;
    background-color: #f3ebe4;
    position: fixed;
    top: 0px;
    left: 0px;
    padding: 20px;
    z-index: 2;
    
    box-shadow: 0px 20px 30px -30px rgba(0, 0, 0, 0.5);
    
    h6{
        grid-column-start: 1;
        grid-column-end: 2;
        color: #7b716a;
        font-weight: bold;
    }


    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;

        grid-column-start: 2;
        grid-column-end: 3;
    }
`

const ContentsStyled = styled.div`
height: 100vh;
margin-bottom: 30vh;
`

const FooterStyled = styled.footer`
    height: 20vh;
    width: 100vw;
    padding: 6%;
    gap: 5px;

    border-radius: 10mm 10mm 0mm 0mm;

    background-color: #7b716a;
    position: fixed;
    bottom: 0px;
    left: 0px;

    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    grid-template-rows: 50%;

    justify-content: center;
    align-items: center;

    font-family: 'Roboto', sans-serif;

    z-index: 2;

    p{
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
        color: #f3ebe4;
        max-height: 100% ;
        overflow: hidden;
        font-size: 24px;
        position: absolute ;
        left: 0;
        
    }

    br{
        margin: 20px;
    }

    button{
        grid-column-start: 3;
        grid-column-end: 4;
        width: 100%;
        height: 100%;
        color: #7b716a;
        border-radius: 5mm;
    }

    
`

const InputStyled = styled.input`
    z-index: 1;

    height: 70px;
    width: 100%;
    border: none;
    border-radius: 15px;
    background-color: #EADDCA;
    color: #7b716aff;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
`

