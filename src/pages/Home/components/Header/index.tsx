import HeroBgMobile from 'homepage/hero-bg-mobile@2x.jpg'
import HeroBgTablet from 'homepage/hero-bg-tablet@2x.jpg'
import HeroBgDesktop from 'homepage/hero-bg-desktop@2x.jpg';
import { Link } from 'react-router-dom';
import * as S from './styles';


export default function Header() {
  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <S.Header >
      <S.HeroImageMobile src={HeroBgMobile} alt="Shrimp pasta" />
      <S.HeroImageTablet src={HeroBgTablet} alt="Shrimp pasta" />
      <S.HeroImageDesktop src={HeroBgDesktop} alt="Shrimp pasta" />

      <S.HeaderContent>
        <S.ContainerLogo>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <S.Logo>dine</S.Logo>
          </Link>
        </S.ContainerLogo>
        <S.Title>Exquisite dining <S.Br /> since 1989</S.Title>
        <S.Paragraph>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</S.Paragraph>

        <S.ContainButton>
          <Link to='/booking'>
            <S.Button onClick={toTop}>BOOK A TABLE</S.Button>
          </Link>
        </S.ContainButton>

      </S.HeaderContent>
    </S.Header>
  )
}
