import styled from "styled-components";

export const styledMessage = {
 
}

export const TChatComponant = styled.div`
  height: 600px;
  width: 470px;
`;


export const TChatContaner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    

    height: 600px;
    width: 470px;
    padding: 20px;

    background-color: #b1c5ce;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;
  

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

// &::-webkit-scrollbar {
//   width: 6px;
// }

// &::-webkit-scrollbar-track {
//   background-color: transparent;
// }

// &::-webkit-scrollbar-thumb {
//   background-color: transparent;
// }