import styled from "styled-components";


export const Section = styled.section`
padding: 60px 24px 60px 24px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
position: relative;

@media screen and (min-width: 1280px) {
  padding: 60px 88px 60px 88px;
}

@media screen and (min-width: 1280px) {
flex-direction: row;
text-align: start;
justify-content: space-between;
padding: 60px 88px 60px 88px;
}

@media screen and (min-width: 1536px) {
  padding: 60px 250px 60px 250px;
}

`;

export const ImageMobile = styled.img`
width: 100%;
max-width: 400px;
margin-bottom: 40px;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
@media screen and (min-width: 768px) {
  display: none;
}
`

export const ImageTablet = styled.img`
width: 100%;
max-width: 575px;
margin-bottom: 40px;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
@media screen and (max-width: 767px) {
  display: none;
}
@media screen and (min-width: 1024px) {
  display: none;
}
`

export const ImageDesktop = styled.img`
width: 100%;
max-width: 450px;
margin-bottom: 40px;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
@media screen and (max-width: 1023px) {
  display: none;
}

@media screen and (min-width: 1536px) {
  max-width: 500px;
}
`

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media screen and (min-width: 1280px) {
  flex-direction: column-reverse;
  align-items: start;
}
`

export const ContainerButtons = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin-bottom: 40px;
max-width: 400px;
@media screen and (min-width: 768px) {
  flex-direction: row;
  gap: 80px;
  max-width: fit-content;
} 

@media screen and (min-width: 1280px) {
  flex-direction: column;
  gap: 20px;
  align-items: start;
  margin-top: 50px;
}
`;

export const ButtonEvent = styled.button`
border: none;
color: var(--color-button-text);
font-size: 25px;
background-color: #ffffff;
cursor: pointer;
padding: 7px 15px;

&:focus{
  border: 4px solid var(--color-ebonyclay)
}
`;

export const SubTitle = styled.h2`
font-weight: 600;
font-size: 40px;
color: var(--color-codgray);
margin-bottom: 20px;
@media screen and (min-width: 768px) {
  font-size: 50px;
}
`;

export const Paragraph = styled.p`
font-weight: 300;
font-size: 20px;
line-height: 30px;
color: var(--color-codgray);
max-width: 500px;
@media screen and (min-width: 768px) {
  font-size: 22px;
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

export const Div = styled.div`
z-index: 3;
position: relative;
`

export const BackgroundImg = styled.img`
position: absolute;
left: 0;
top: 0;
max-width: 50%;
z-index: 0;
@media screen and (max-width: 768px) {
  display:none
}
@media screen and (min-width: 1280px) {
  max-width: 30%;
}
`

export const PatternLineImg = styled.img`
position: absolute;
left: -67px;
top: -32px;
width: 30%;
@media screen and (max-width: 768px) {
  display:none
}
`