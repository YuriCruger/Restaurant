import styled from "styled-components";

export const Footer = styled.footer`
background-color: var(--color-codgray);
padding: 80px 24px 80px 24px;
text-align: center;
color: #ffffff;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (min-width: 1536px) {
    padding: 80px 186px 80px 186px;
}
`

export const ContainerLogo = styled.div`
@media screen and (min-width: 1024px) {
  margin-bottom: 60px;
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
}
`;

export const Container = styled.div`
@media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 64px;
}
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin: 20px 0 40px 0;

&.credits {
    margin: 0 auto;
    flex-direction: row;
    align-items: center
}

@media screen and (min-width: 768px) {
    flex-direction: column;
}

@media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 80px;
}
`

export const SubContent = styled.div`
margin-bottom: 20px;
display: flex;
flex-direction: column;
gap: 10px;
@media screen and (min-width: 768px) {
    text-align: start;
}
`;

export const InfoText = styled.p`
font-size: 18px;
letter-spacing: 2px;
`;

export const Credits = styled.div`
display: flex;
align-items: center;
gap: 10px;
`