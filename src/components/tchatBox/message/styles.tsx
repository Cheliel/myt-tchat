import styled from 'styled-components';



export const MessageContanerStyle = styled.div`
    display: flex;
    flex-direction: raw;
    align-items: center;
    align-content: center;
    
    justify-content: start;
    background-color: #ecf1f3;
    width:100%;
    padding : 7px;
    margin: 7px;
    border-radius : 14px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;    }
`;

export const Sender = styled.div`


`;

export const MessageStyle = styled.div`

    margin-left: 5px;

`;