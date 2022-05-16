import styled from 'styled-components';

import img from "./components/background-1.jpg"

export default function Background_1 () {

    return (

        <Background1>
            <BlurStyled/>
        </Background1>

    );

}

const Background1 = styled.div`

    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 0;
    background-image: url(${img});
    background-size: cover;
    background-position: 40%;
    z-index: 0;

`;


const BlurStyled = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.67) 15%, rgba(0,0,0,0.33) 88%);
`