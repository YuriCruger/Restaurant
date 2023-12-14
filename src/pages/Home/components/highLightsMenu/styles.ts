import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--color-codgray);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 24px 60px 24px;
  text-align: center;
  @media screen and (min-width: 1024px) {
    padding: 120px 88px 120px 88px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: start;
    padding: 180px 88px 180px 88px;
  }

  @media screen and (min-width: 1536px) {
    padding: 180px 250px 180px 250px;
}
`;

export const LineBall = styled.div`
display: flex;
align-items: center;
gap: 10px;
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

export const Title = styled.h2`
color: #ffffff;
font-weight: 600;
font-size: 40px;
margin-bottom: 20px;
margin-top: 30px;

@media screen and (min-width: 768px) {
    font-size: 50px;
}
`;

export const Paragraph = styled.p`
font-weight: 300;
font-size: 20px;
line-height: 30px;
color: #ffffff;
max-width: 400px;
margin-bottom: 40px;
`;

export const Image = styled.img`
width: 100%;
max-width: 400px;
margin-bottom: 40px;
z-index: 1;

@media screen and (min-width: 768px) {
  max-width: 150px;
}
`;

export const SubTitle = styled.h3`
color: #ffffff;
margin-bottom: 10px;
font-size: 22px;
`;

export const Hr = styled.hr`
  width: 100%;
  max-width: 400px;
  margin: 20px 0 20px 0;
  border: none;
  border-top: 1px solid var(--color-flushedgray);
  @media screen and (min-width: 768px) {
    max-width: 572px;
}
`;

export const Container = styled.div`
display: flex;
flex-direction:column;

&.first-container {
  margin-bottom: auto;
  align-items: center;

  @media screen and (min-width: 1280px) {
    align-items: start;
  }
}
`

export const Content = styled.div`
@media screen and (min-width: 768px) {
  display: flex;
  gap: 50px;
  align-items: center;
  text-align: start;
  position: relative;
}
`;

export const SubLine = styled.img`
position: absolute;
width: 100px;
left: 80px;
top: 20px;
z-index: 0;
@media screen and (max-width: 768px) {
display: none
}
`