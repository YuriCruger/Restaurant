import styled from "styled-components";

export const Header = styled.header`
background-image: url(../../../public/assets/booking/hero-bg-mobile@2x.jpg);
background-repeat: no-repeat;
background-size: cover;
height: 550px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding: 50px 24px 50px 24px;
gap: 30px;

@media screen and (min-width: 768px) {
    background-image: url(../../../public/assets/booking/hero-bg-tablet@2x.jpg);
    padding: 50px 88px 50px 88px;
}

@media screen and (min-width: 1024px) {
    background-image: url(../../../public/assets/booking/hero-bg-desktop@2x.jpg);
}

@media screen and (min-width: 1280px) {
  padding: 50px 250px 50px 250px;
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

@media screen and (min-width: 768px) {
  font-size: 60px;
  margin-right: auto;
  margin-bottom: 0;
  }
`

export const Title = styled.h1`
font-weight: 100;
font-size: 40px;
color: #ffffff;

@media screen and (min-width: 768px) {
  font-size: 60px;
  }

  @media screen and (min-width: 1024px) {
  font-size: 80px;
}

  @media screen and (min-width: 1536px) {
  margin-right: auto;
}
`

export const Paragraph = styled.p`
font-weight: 200;
font-size: 20px;
line-height: 30px;
max-width: 400px;
color: #ffffff;

@media screen and (min-width: 768px) {
  font-size: 22px;
  }

@media screen and (min-width: 1024px) {
  font-size: 24px;
  }

  @media screen and (min-width: 1536px) {
  margin-right: auto;
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
transition: .3s;

&:hover {
    background-color: #ffffff;
    border: 1px solid #000000;
    color: #000000
  }

  @media screen and (min-width: 768px) {
  display:none;
}
`