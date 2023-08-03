import styled from "styled-components";

export const InputMessageContaner = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-around;


    width: 400px;
    border-radius: 14px;
    background-color: #224459;
    padding: 10px;
    margin: 5px;

`;

export const Input = styled.input`
    width: 100%;
    background-color: inherit;
    border: none;
    border-radius: 14px;
    padding: 15px;
    font-size: 14px;
    margin: 5px;
    color: #DDE7F8;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 1) 0px 5px 36px -7px inset;  border-radius: 14px;


    
    
    &:hover{
          
      }

    &:focus {
        outline: none;
    }
`;

export const MyButton = styled.img`

 font-size: 0.8em;
 height: 30px;
 width: 60px;
 border-radius:14px;
 &:hover{
    cursor: pointer; 
  }

 
`;