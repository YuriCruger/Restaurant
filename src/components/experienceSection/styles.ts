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
    padding: 0 88px;
}

@media screen and (min-width: 1280px) {
  align-items: center;
}

@media screen and (min-width: 1536px) {
    padding: 0 250px;
}
`

export const Content = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
z-index: 1;

@media screen and (min-width: 1024px) {
  flex-direction: row;
  text-align: start;
  gap: 60px;
  width: 100%;
  &.inverse {
    flex-direction: row-reverse;
  }
}
`

export const ImageMobile = styled.img`
  width: 100%;
  max-width: 400px;
  margin-top: -75px;
  @media screen and (min-width: 768px) {
    display:none
  }
`

export const ImageTablet = styled.img`
  width: 100%;
  max-width: 570px;
  margin-top: -75px;
  @media screen and (max-width: 767px) {
    display:none
  }
  @media screen and (min-width: 1024px) {
    display:none
  }
`

export const ImageDesktop = styled.img`
  width: 100%;
  max-width: 450px;
  margin-top: -75px;

  @media screen and (max-width: 1023px) {
    display:none;
    margin-right: auto;
  }
  
  @media screen and (min-width: 1280px) {
    max-width: 550px;
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

export const BackgroundImg = styled.img`
position: absolute;
left: 0;
top: 200px;
max-width: 75%;
z-index: 0;

&.backgroundImg-2 {
  right: 0;
  left: auto;
  top: auto;
  bottom: 50px;
  transform: scaleX(-1);
}

@media screen and (max-width: 768px) {
  display: none;
}
`