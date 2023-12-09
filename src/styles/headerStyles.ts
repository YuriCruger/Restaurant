import styled from 'styled-components'

export const Header = styled.header`
background-color: var(--color-codgray);
`

export const HeroImage = styled.img`
width: 100%;
`

export const HeaderContent = styled.div`
width: 100%;
padding:  40px 24px  40px 24px;
text-align: center;
font-weight: bold;
color: white;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`

export const Logo = styled.a`
color: white;
font-size: 45px;
`

export const Title = styled.h1`
font-weight: 300;
font-size: 40px;
`

export const Paragraph = styled.p`
font-weight: 200;
font-size: 20px;
line-height: 30px;
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
:hover {
  background-color: white;
  color: var(--color-codgray);
}
`