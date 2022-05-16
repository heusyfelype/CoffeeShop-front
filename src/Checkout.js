import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';


export default function Checkout() {
    const navigate = useNavigate()

    const [productsInCart, setProducsInCart] = useState([[], { total: 0.00 }])

    console.log(productsInCart)


    useEffect(() => {
        const config = {
            headers: { userId: "UmId" }
        }
        const request = axios.get("http://localhost:5000/cart", config)

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

    // if(productsInCart.length > 0){
    //     useEffect(() =>{
    //         let soma = 0
    //         for(const each of productsInCart){
    //             soma += productsInCart.priceCart
    //         }
    //         setTotal(soma)
    //     }, [])
    // }



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



                </ContentsStyled>

                <FooterStyled>
                    <p>
                        Total R$ {productsInCart[1].total.toFixed(2)}
                    </p>
                    <button >
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

    function refreshQtt(product, action) {

        const productObject = {
            "userId": "UmId",
            "productId": product.productId,
            "action": action,
            "qtt": 1
        }
        const promise = axios.post("http://localhost:5000/cart", productObject)
        promise.then(() => {
            const config = {
                headers: { userId: "UmId" }
            }
            const request = axios.get("http://localhost:5000/cart", config)

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
                        <h5> {eachProduct.qtt} X {eachProduct.price.toFixed(2).replace(".", ",")} </h5>
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















const ProductStyled = styled.div`

    display: grid;
    grid-template-columns: 3fr 5fr;
    justify-items: center;
    align-items: center;
    gap: 1%;

    position: relative;

    height: 150px;
    border-radius: 15px;

    box-shadow: 0px 30px 80px -35px rgba(0, 0, 0, 0.5);

    padding: 15px;
    margin-top: 40px;

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
        overflow-y: scroll;
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
    z-index: 1;
    
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

    
    

    p{
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
        color: #f3ebe4;
        max-height: 100% ;
        overflow: hidden;
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