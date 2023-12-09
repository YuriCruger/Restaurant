import enjoyablePlaceMobile from '../../public/assets/homepage/enjoyable-place-mobile@2x.jpg'
import locallySourceMobile from '../../public/assets/homepage/locally-sourced-mobile@2x.jpg'
import * as S from '../styles/experienceSectionStyles'
import line from '../../public/images/line48.svg'

export default function ExperienceSection() {
    return (
        <S.Section>
            <S.Image src={enjoyablePlaceMobile} alt="Enjoyable place" />
            <div>
                <S.Curve />
                <S.Line src={line} alt="" />
            </div>

            <div>
                <S.SubTitle>Enjoyable place <br /> for all the family</S.SubTitle>
                <S.Paragraph>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</S.Paragraph>
            </div>

            <S.Image className="no-margin-top" src={locallySourceMobile} alt="Enjoyable place" />
            <div>
                <S.Line src={line} alt="" />
            </div>
            
            <div>
                <S.SubTitle>The most locally <br /> sourced food</S.SubTitle>
                <S.Paragraph>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</S.Paragraph>
            </div>
        </S.Section>
    )
}
