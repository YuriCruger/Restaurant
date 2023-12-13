import styled from 'styled-components'

export const Header = styled.header`
background-color: var(--color-codgray);
@media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    padding-left: 88px;
}

@media screen and (min-width: 1536px) {
    padding-left: 250px;
}
`

export const HeroImageMobile = styled.img`
width: 100%;
@media screen and (min-width: 768px) {
    display: none
}
`

export const HeroImageTablet = styled.img`
width: 100%;
@media screen and (max-width: 767px) {
    display: none
}
@media screen and (min-width: 1024px) {
    display: none
}
`

export const HeroImageDesktop = styled.img`
max-width: 600px;
@media screen and (max-width: 1023px) {
    display: none
}
@media screen and (min-width: 1280px) {
    max-width: 600px;
    margin-left: 30px;
}
`

export const HeaderContent = styled.div`
width: 100%;
padding:  40px 24px  40px 0px;
text-align: center;
font-weight: bold;
color: white;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

@media screen and (min-width: 1024px) {
    text-align: start;
    align-items: start;
    width: 100%;
}
`

export const Logo = styled.button`
color: #ffffff;
background-color: transparent;
border: none;
font-size: 45px;
cursor: pointer;
text-decoration: none;

@media screen and (min-width: 1024px) {
  font-size: 60px;
  margin-bottom: 60px;
}
`

export const Title = styled.h1`
font-weight: 100;
font-size: 40px;

@media screen and (min-width: 768px) {
  font-size: 60px;
  }

  @media screen and (min-width: 1024px) {
  font-size: 80px;
}
`

export const Paragraph = styled.p`
font-weight: 200;
font-size: 20px;
line-height: 30px;
max-width: 400px;

@media screen and (min-width: 1024px) {
  font-size: 22px;
}
`

export const Button = styled.button`
width: 250px;
height: 70px;
background-color: transparent;
border: 1px solid white;
color: white;
font-size: 18px;
letter-spacing: 2px;
cursor: pointer;
margin-bottom: 110px;
transition: .3s;

&:hover {
    background-color: #ffffff;
    border: 1px solid #000000;
    color: #000000
  }

  @media screen and (min-width: 1024px) {
  margin-top: 30px;
}
`;

export const Br = styled.br`
  @media screen and (max-width: 768px) {
display:none
  }
`;