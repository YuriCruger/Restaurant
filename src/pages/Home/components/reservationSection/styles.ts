import styled from "styled-components";

export const Section = styled.section`
background-image: url('../../../public/images/ready-bg-mobile@2x.jpg');
background-repeat: no-repeat;
background-size: cover;
padding: 70px 24px 70px 24px;
text-align: center;
@media screen and (min-width: 768px) {
  background-image: url('../../../public/images/ready-bg-tablet@2x.jpg');
}
@media screen and (min-width: 1024px) {
  background-image: url('../../../public/images/ready-bg-desktop@2x.jpg');
}

@media screen and (min-width: 1280px) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 70px 88px 70px 88px;
}

@media screen and (min-width: 1536px) {
  padding: 70px 250px 70px 250px;
}
`;

export const Title = styled.h2`
color: #ffffff;
font-weight: 600;
font-size: 40px;
margin-bottom: 20px;
`;

export const Button = styled.button`
width: 250px;
height: 70px;
background-color: transparent;
border: 1px solid #ffffff;
color: #ffffff;
font-size: 18px;
letter-spacing: 2px;
cursor: pointer;
transition: .3s;

&:hover {
    background-color: #ffffff;
    border: none;
    color: #000000
  }
`;