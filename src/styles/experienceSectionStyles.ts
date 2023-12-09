import styled from 'styled-components'

export const Section = styled.section`
padding: 0 24px 0 24px;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
text-align: center;
`

export const Image = styled.img`
  height: 400px;
  margin-top: -75px;
  
  &.no-margin-top {
    margin-top: 0;
  }
`

export const Curve = styled.span`
height: 100px;
width: 50px;
color: black;
background-color: black;
`

export const Line = styled.img`
width: 70px;
margin-left: auto;
border-radius: 50%;
`

export const SubTitle = styled.h2`
font-weight: 600;
font-size: 40px;
color: var(--color-codgray);
margin-bottom: 20px;
`

export const Paragraph = styled.p`
font-weight: 300;
font-size: 20px;
line-height: 30px;
color: var(--color-codgray);
`