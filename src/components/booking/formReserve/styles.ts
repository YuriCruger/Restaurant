import styled from "styled-components";

export const Container = styled.div`
padding: 0 24px 100px 24px;
position: relative;

@media screen and (min-width: 768px) {
    display: flex; 
    justify-content: center;
}

@media screen and (min-width: 1536px) {
    padding-right: 250px;
}
`

export const BackgroundImg = styled.img`
position: absolute;
left: 0;
top: 0;
max-width: 40%;
z-index: 0;

@media screen and (max-width: 1024px) {
  display:none
}

@media screen and (min-width: 1280px) {
    top: auto;
    bottom: 0;
    max-width: 48%;
}
`

export const Form = styled.form`
position: relative;
padding: 40px;
background-color: #ffffff;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
margin-top: -80px;

@media screen and (min-width: 768px) {
    margin-top: -120px;
    width: 550px;
}

@media screen and (min-width: 1536px) {
  margin-left: auto;
  margin-top: -300px;
}
`

export const ContentSelects = styled.div`
display: flex;
gap: 20px;
width: 100%;
position: relative;

@media screen and (max-width: 375px) {
    flex-direction: column;
}
`

export const Select = styled.select`
width: 100%;
border: none;
height: 50px;
border-bottom: 1px solid #cccccc;
font-size: 22px;
font-weight: 300;

&:focus{
    outline: none;
    border-bottom: 2px solid #8EC2ED;
}

@media screen and (max-width: 375px) {
    width: 100%;
}
`

export const DateInputGroup = styled.div`
width: 33%;
`

export const Input = styled.input`
width: 100%;
border: none;
height: 50px;
border-bottom: 1px solid #cccccc;
font-size: 22px;
font-weight: 300;
padding: 0 4px;
&:focus{
    outline: none;
    border-bottom: 2px solid #8EC2ED;
}

&.limit-width {
    width: 100%;
    @media screen and (max-width: 375px) {
    width: 100%;
}
}
`

export const Label = styled.label`
margin-bottom: -20px;
margin-right: auto;
font-size: 22px;
font-weight: 300;
`

export const Counter = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 40px;
width: 100%;
border-bottom: 1px solid #cccccc;
font-size: 22px;
padding: 10px 0;
height: 50px;
@media screen and (max-width: 375px) {
    text-align: center;
}

@media screen and (min-width: 768px) {
    gap: 0;
    justify-content: space-between;
}
`

export const CounterManipulator = styled.button`
border: none;
color: var(--color-beaver);
font-size: 30px;
height: 30px;
width: 30px;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;

@media screen and (min-width: 768px) {
    font-size: 40px;
}
`

export const Button = styled.button`
width: 250px;
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

export const PatternLineImg = styled.img`
position: absolute;
bottom: -38px;
left: -80px;
width: 160px;
@media screen and (max-width: 1024px) {
  display:none
}
`

export const Error = styled.p`
color: #FF0000;
margin-right: auto;
margin-top: 10px;
font-size: 14px;
`