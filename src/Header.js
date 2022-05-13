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
    background-color: green;
    /* background-color: #EADDCA; */

    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;

`;

const HeaderText = styled.div`

    /* margin-top: 15px; */
    display: flex;
    flex-direction: column;
    gap: 10px;

`;

const HeaderTitle = styled.div`

    /* font-family: ; */
    font-size: 18px;
    font-weight: bold;
    color: black;

`;

const HeaderMessage = styled.div`

    /* font-family: ; */
    font-size: 15px;
    color: #EDC9AF;

`;

const ProfilePic = styled.div`

    /* margin-top: 15px; */
    height: 45px;
    width: 45px;
    border-radius: 100%;
    background-color: brown;

`;