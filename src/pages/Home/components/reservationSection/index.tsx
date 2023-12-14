import { Link } from 'react-router-dom'
import * as S from './styles'

export default function ReservationSection() {
  return (
    <S.Section>
      <S.Title>Ready to make a reservation?</S.Title>
      <Link to='/booking'>
        <S.Button>BOOK A TABLE</S.Button>
      </Link>
    </S.Section>
  )
}
