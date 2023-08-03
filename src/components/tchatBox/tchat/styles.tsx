import styled from "styled-components";



export const TChatComponant = styled.div`


  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: start;
  background-color: #224459;
  padding: 10px;
  border-radius : 14px;
  
`;
//box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 1) 0px 5px 36px -7px inset;  border-radius: 14px;
// inner box shadow 
//box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 1) 0px 5px 36px -7px inset;  border-radius: 14px;


export const TChatContaner = styled.div`
    

display:inline-block;
height: 600px;
width: 450px;
margin-bottom: 7px;






overflow-y: scroll;
overflow-x: hidden;
scrollbar-width: none;


&::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

 
`;

export const TChatStyle = styled.ul`
    
 
    padding: 1px;
    width:100%;
    margin:0;

 
`;

// &::-webkit-scrollbar {
//   width: 6px;
// }

// &::-webkit-scrollbar-track {
//   background-color: transparent;
// }

// &::-webkit-scrollbar-thumb {
//   background-color: transparent;
// }