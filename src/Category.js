import styled from 'styled-components';

export default function Category () {

    return (

        <CategoryContainer>
            <CafésEspeciais></CafésEspeciais>
            <Cafeteiras></Cafeteiras>
            <XícarasExclusivas></XícarasExclusivas>
        </CategoryContainer>

    );

}

const CategoryContainer = styled.div`

    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;    

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    height: 120px;
    width: fit-content;

    background-color: cian;

`;

const CafésEspeciais = styled.div`

    margin-top: 70px;    

    height: 105px;
    width: 105px;

    background-color: orange;
    border-radius: 25px;

    z-index: 1;

`;

const Cafeteiras = styled.div`

    margin-top: 70px;    

    height: 105px;
    width: 105px;

    background-color: orange;
    border-radius: 25px;

    z-index: 1;

`;

const XícarasExclusivas = styled.div`

    margin-top: 70px;    

    height: 105px;
    width: 105px;

    background-color: orange;
    border-radius: 25px;

    z-index: 1;

`;