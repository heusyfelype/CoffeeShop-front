import styled from 'styled-components';
import background_1 from './components/background-1.jpg';

export default function Background_1 () {

    return (

        <Background1>
            <img src={background_1} alt={'backgroound_1'} height={900}/>
        </Background1>

    );

}

const Background1 = styled.div`

    widtht: 50vw;
    position: fixed;
    z-index: 0;

`;