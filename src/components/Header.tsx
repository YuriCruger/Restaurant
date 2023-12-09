import HeroBgMobile from '../../public/assets/homepage/hero-bg-mobile@2x.jpg'
import * as S from '../styles/headerStyles'



export default function Header() {
  return (
    <S.Header>
       <S.HeroImage src={HeroBgMobile} alt="Shrimp pasta" />

       <S.HeaderContent>
       <S.Logo>dine</S.Logo>
       <S.Title>Exquisite dining <br /> since 1989</S.Title>
       <S.Paragraph>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</S.Paragraph>
       <S.Button>BOOK A TABLE</S.Button>
       </S.HeaderContent>
    </S.Header>
  )
}
