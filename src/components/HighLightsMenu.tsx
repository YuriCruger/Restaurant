import * as S from '../styles/highLightsMenuStyles'
import Salmon from '../../public/assets/homepage/salmon-mobile@2x.jpg'
import Beef from '../../public/assets/homepage/beef-mobile@2x.jpg'
import Chocolate from '../../public/assets/homepage/chocolate-mobile@2x.jpg'

export default function HighLightsMenu() {
    return (
        <S.Section>
            <img src="" alt="" />
            <h2>A few highlights <br /> from our menu</h2>
            <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
            <img src={Salmon} alt="" />
            <h3>Seared Salmon Fillet</h3>
            <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
            <hr />
            <img src={Beef} alt="" />
            <h3>Rosemary Filet Mignon</h3>
            <p>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
            <hr />
            <img src={Chocolate} alt="" />
            <h3>Seared Salmon Fillet</h3>
            <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
        </S.Section>
    )
}
