import { Link } from 'react-router-dom'
import * as S from './styles'

export default function index() {
  return (
    <S.Header>
      <Link to='/' style={{ marginRight: 'auto' }}>
        <S.Logo>dine</S.Logo>
      </Link>
      <S.Title>Reservations</S.Title>
      <S.Paragraph>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</S.Paragraph>
      <S.Button>RESERVE PLACE</S.Button>
    </S.Header>
  )
}
