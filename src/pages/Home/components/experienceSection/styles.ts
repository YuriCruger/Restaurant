import styled from 'styled-components'

export const Section = styled.section`
padding: 0 24px 60px 24px;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
text-align: center;
position: relative;

@media screen and (min-width: 1024px) {
  padding: 0;
}

@media screen and (min-width: 1280px) {
  align-items: center;
}
`

export const Content = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
z-index: 1;

@media screen and (min-width: 1024px) {
  position: absolute;
  left: 88px;
  flex-direction: row;
  text-align: start;
  gap: 60px;
  margin-right: 88px;
  &.inverse {
    margin-right: 0;
    right: 88px;
    bottom: 0;
    flex-direction: row-reverse;
  }
}

@media screen and (min-width: 1536px) {
  left: 250px;
  &.inverse {
    right: 250px;
  }
}
`

export const Image = styled.img`
  width: 100%;
  max-width: 450px;
  margin-top: -75px;

  @media screen and (min-width: 1280px) {
    max-width: 500px;
  }

  &.locally{
    margin-top: 0px;
    @media screen and (min-width: 1024px) {
      margin-bottom: -75px;
    }
  }
`

export const LineBall = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
margin: 30px 0 30px 0;
@media screen and (min-width: 1024px) {
  justify-content: start;
}
`

export const Ball = styled.div`
border: 1px solid var(--color-beaver);
border-radius: 50%;
height: 10px;
width: 10px;
`

export const Line = styled.img`
  width: 60px;
`;

export const SubTitle = styled.h2`
font-weight: 600;
font-size: 40px;
color: var(--color-codgray);
margin: 0 auto 20px auto;
max-width: 400px;

@media screen and (min-width: 768px) {
    font-size: 50px;
    max-width: 500px;
  }
`

export const Paragraph = styled.p`
font-weight: 300;
font-size: 20px;
line-height: 30px;
color: var(--color-codgray);
max-width: 500px;
@media screen and (min-width: 1024px) {
  font-size: 22px;
  }
`

export const PatternCurve = styled.img`
margin-top: 100px;
margin-right: auto;
width: 95%;

@media screen and (max-width: 1024px) {
  display: none;
}

@media screen and (min-width: 1280px) {
  margin-top: 50px;
}

@media screen and (min-width: 1400px) {
  width: 85%;
}

@media screen and (min-width: 1700px) {
  width: 75%;
}

&.patternCurve-2 {
  margin: 220px 0 50px auto;
  transform: scaleX(-1);
  @media screen and (max-width: 1280px) {
  margin-bottom: 100px;
}
}
`