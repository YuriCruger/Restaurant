import { Link } from 'react-router-dom'
import * as S from './styles'

export default function ReservationSection() {
  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <S.Section>
      <S.Title>Ready to make a reservation?</S.Title>
      <Link to='/booking'>
        <S.Button onClick={toTop}>BOOK A TABLE</S.Button>
      </Link>
    </S.Section>
  )
}
