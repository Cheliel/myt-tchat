import styled from 'styled-components';

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    background-color: #82a1b1;

    height: 100vh;
    width: 100wh;

`;

export const HomePageContaner = styled.div`
    width: 350px;
    border-radius: 14px;
    background-color: #b1c5ce;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const ConnexionContaner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    height: 400px;
`;

export const InputContaner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin: 15px;
    width: 100%;
    
`;

export const Input = styled.input`
    width: 60%;
    background-color: #ecf1f3;
    border: none;
    border-radius: 14px;
    padding: 10px;
    font-size: 14px;
    margin: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    
    
    &:hover{
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;    }

    &:focus {
        outline: none;
    }
`;

export const Text = styled.p`
    padding: 10px;
    font-size: 14px;
    margin: 0px;
`;

export const Bouton = styled.button`
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #ffffff;
    cursor: pointer;
    margin:15px;

    &:hover {
        background-color: #0056b3;
    }

    &:active {
        background-color: #003366;
    }

`;

export const Titre = styled.p`
    padding: 10px;
    font-size: 30px;
    margin: 0px;
    font-weight: 600;
`;



// border: 2px solid red;
// font-size: 20px;
// background-color: blue;
// color: #FFF
//  justify-content: center;