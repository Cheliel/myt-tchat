import styled from 'styled-components';


export const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: 100vh;
    background-color: #0C151D;

`;
//background-color: #82a1b1;

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

export const InputChannelContaner = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-around;


    width: 350px;
    border-radius: 14px;
    background-color: #b1c5ce;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    padding: 10px;

`;

export const MyButton = styled.button`

 font-size: 10px;
 height: 30px;
 width: 60px
`;