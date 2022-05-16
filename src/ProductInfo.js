import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';

export default function ProductInfo() {
    const product_id = { product_id: useParams().id }

    const token_ID = JSON.parse(localStorage.getItem('token_ID'));
    console.log(token_ID.id)

    const [product, setProduct] = useState({})
    const [qtt, setQtt] = useState(0)

    let navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: product_id
        }
        const request = axios.get("http://localhost:5000/product", config)
        request.then(response => {
            const { data } = response;
            setProduct({ ...data })
        })
        request.catch(response => alert(response))
    }, [])

    let test = JSON.stringify(product)


    function insertToCart(){
        let produtToInsert = {
            "userId": token_ID.id,
            "productId": product_id.product_id,
            "action": "add",
            "qtt": qtt
        }
        // console.log(produtToInsert)
        const request = axios.post("http://localhost:5000/cart", produtToInsert)
        request.then(() => {
            alert(`Foram adicionadas ${qtt} unidades deste produto ao carrinho!`);
            setQtt(0);
        })
        request.catch(response => alert(response));
    }



    return (test === "{}" ? "" :

        <MainStyled>
            <ContentsStyled>
                <HeaderStyled>
                    <h6> Bem vindo, Fulano! </h6>
                    <p> Selecione a quantidade do produto que você escolheu </p>
                    <img src='https://static.vecteezy.com/ti/vetor-gratis/p1/2002247-icone-de-avatar-de-mulher-negra-bonita-gr%C3%A1tis-vetor.jpg' />

                </HeaderStyled>
                <Link name="back" to={"/welcome-page"}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </Link>
                <ProductStyled>
                    <img src={product.img} />
                </ProductStyled>

                <NavStyled >
                    <h5> R$ {product.price.toFixed(2).replace(".", ",")}</h5>
                    <p>
                        <ion-icon name="remove-outline" onClick={() => {
                            if (qtt > 0) {
                                return setQtt(qtt - 1)
                            }
                            setQtt(0)
                        }}></ion-icon>
                        {`    ${qtt}   `}
                        <ion-icon name="add-outline" onClick={() => {
                            setQtt(qtt + 1)
                        }}></ion-icon>
                    </p>


                </NavStyled>

                <DescriptionStyled>
                    {product.description}
                </DescriptionStyled>
            </ContentsStyled>

            <FooterStyled>
                <img src={product.img} />
                <p> {product.small_description}</p>
                <button className='insert' onClick={insertToCart}>
                    {qtt > 0 ? `Inserir ${qtt} no carrinho! ` : "Selecione a quantidade para adicionar ao carrinho!"}
                </button>
                <button className='forward' onClick={() => {navigate("/cart")}}>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
            </FooterStyled>
        </MainStyled>

    );

}

const MainStyled = styled.main`
    background-color: #f3ebe4;
    width: 100vw;
    height: 100vh;
    padding: 5vh 8%;
    font-family: 'Roboto', sans-serif;


    a[name="back"]{
        position: absolute;
        left: 5%;
        top: 15vh;
        text-decoration: none;
    }
    
    ion-icon[name="chevron-back-outline"]{
        font-size: 60px;
        color: #7b716a;
    }
`

const ContentsStyled = styled.div`
height: 75vh;
`

const HeaderStyled = styled.div`
    height: 7.5vh;
    display: grid;
    grid-template-columns: 85% 15%;
    grid-template-rows: auto;

    h6{
        grid-column-start: 1;
        grid-column-end: 2;
        color: #7b716a;
        font-weight: bold;
    }

    p{
        grid-column-start: 1;
        grid-column-end: 2;
        color: #7b716a;
    }

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;

        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
    }
`

const ProductStyled = styled.div`
height: 32.5vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;

    img{
        width: 90%;
        
    }
`


const NavStyled = styled.main`
    display: grid;
    grid-template-columns: 5fr 4fr 0.25fr;
    justify-items: first center;
    align-items: center;

    height: 7.5vh;
    width: 100%;
    border: 2px solid #7b716a;
    border-radius: 5mm;
    background-color: #f3ebe4;
    color: #7b716a;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    text-align: center;
    font-weight: bold;

    h5{
        padding: 0px 10%;
        font-size: 24px;
    }

    p{
        font-size: 24px;

    }
   
    ion-icon{
        margin: 0px 10px;
        --ionicon-stroke-width: 80px;
        cursor: pointer;
    }
    
`

const DescriptionStyled = styled.div`
    margin: 2.5vh 0px;
    height: 22.5vh;
    overflow-y: scroll;
    color: #7b716a;
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

    
    img{
        width: 100%;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
    }

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
