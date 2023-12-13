import * as S from './styles'
import Salmon from '../../../public/assets/homepage/salmon-mobile@2x.jpg'
import Beef from '../../../public/assets/homepage/beef-mobile@2x.jpg'
import Chocolate from '../../../public/assets/homepage/chocolate-mobile@2x.jpg'
import lineIcon from '../../../public/images/line48.svg'

export default function HighLightsMenu() {
    return (
        <S.Section>
            <S.Container className='first-container'>
                <S.LineBall>
                    <S.Ball></S.Ball>
                    <S.Line src={lineIcon} alt="" />
                </S.LineBall>
                <S.Title>A few highlights <br /> from our menu</S.Title>
                <S.Paragraph>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</S.Paragraph>
            </S.Container>

            <S.Container>
                <S.Content>
                    <S.Image className='contain-margin-top' src={Salmon} alt="" />
                    <S.SubLine src={lineIcon} alt="" className='contain-margin-top' />
                    <div>
                        <S.SubTitle>Seared Salmon Fillet</S.SubTitle>
                        <S.Paragraph>Our locally sourced salmon served with a refreshing buckwheat summer salad.</S.Paragraph>
                    </div>
                </S.Content>
                <S.Hr />

                <S.Content>
                    <S.Image src={Beef} alt="" />
                    <S.SubLine src={lineIcon} alt="" />
                    <div>
                        <S.SubTitle>Rosemary Filet Mignon</S.SubTitle>
                        <S.Paragraph>Our prime beef served to your taste with a delicious choice of seasonal sides.</S.Paragraph>
                    </div>
                </S.Content>

                <S.Hr />

                <S.Content>
                    <S.Image src={Chocolate} alt="" />
                    <S.SubLine src={lineIcon} alt="" />
                    <div>
                        <S.SubTitle>Seared Salmon Fillet</S.SubTitle>
                        <S.Paragraph>Creamy mousse combined with summer fruits and dark chocolate shavings.</S.Paragraph>
                    </div>
                </S.Content>
            </S.Container>

        </S.Section>
    )
}
