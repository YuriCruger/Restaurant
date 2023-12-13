import styled from "styled-components";

export const ModalContainer = styled.div`
height: 100vh;
width: 100%;
position: absolute;
top: 0;
display: flex;
align-items: center;
justify-content: center;
`

export const BackVisual = styled.div`
opacity: 70%;
background-color: var(--color-codgray);
height: 100vh;
width: 100%;
position: absolute;
z-index: 0;
`

export const Content = styled.div`
background-color: #ffffff;
height: 500px;
width: 450px;
margin: 24px;
padding: 20px 40px;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
z-index: 1;
`

export const Close = styled.div`
display: flex;
flex-direction: row-reverse;
width: 100%;
`

export const Title = styled.h2`
font-weight: bold;
font-size: 26px;
margin: 20px 0;
`

export const DataContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #cccccc;
color: var(--color-inputgray);
padding: 10px 0;
font-size: 18px;
width: 100%;
`

export const Infos = styled.div`
color: var(--color-flushedgray);
margin-top: 30px;
display: flex; 
flex-direction: column;
gap: 20px;
line-height: 20px;
`

export const Button = styled.button`
width: 200px;
height: 70px;
background-color: var(--color-codgray);
border: none;
color: #ffffff;
font-size: 18px;
letter-spacing: 2px;
cursor: pointer;
margin-top: 30px;
transition: .3s;

&:hover {
    background-color: #ffffff;
    border: 1px solid #000000;
    color: #000000
  }
`