import styled from 'styled-components';

export default function Header () {

    return (

        <StoreHeader>
            <HeaderText>
                <HeaderTitle>Bem vindo(a)!</HeaderTitle>
                <HeaderMessage>Esperamos que<br /> encontre tudo o que precisa! =)</HeaderMessage>
            </HeaderText>
            <ProfilePic></ProfilePic>
        </StoreHeader>

    );

}

const StoreHeader = styled.div`

    position: fixed;
    top: 0;

    padding-left: 15px;
    padding-right: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 110px;
    width: 100vw;
    background-color: #EADDCA; 

`;

const HeaderText = styled.div`

    /* margin-top: 15px; */
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    gap: 10px;

`;

const HeaderTitle = styled.div`

    /* font-family: ; */
    font-size: 18px;
    font-weight: bold;
    color: black;

`;

const HeaderMessage = styled.div`

    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    color: grey;

`;

const ProfilePic = styled.div`

    margin-top: -15px;
    height: 45px;
    width: 45px;
    border-radius: 100%;
    background-color: brown;

`;