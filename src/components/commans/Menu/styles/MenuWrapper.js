import styled from "styled-components";

export const MenuWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px 0 12px;
    ${ (props) => console.log(props)}
`;

MenuWrapper.LeftSide = styled.div`
    /*Reset*/
    margin: 0;
    padding: 0;
    
    /*Position*/
    display: flex;
    order: 1;
`;

MenuWrapper.RightSide = styled.div`
    /*Reset*/
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Rubik', sans-serif;
    
    /*Position*/
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    order: 2;

    /*Dimission*/
    width: 350px;

    a {
        text-align: center;
        display: block;
        text-decoration: none;
        color: #88989E;
        transition: 200ms ease-in-out;
        &:hover,
        &:focus {
            font-weight: 500;
            color: #070C0E;
        }
    }
`;