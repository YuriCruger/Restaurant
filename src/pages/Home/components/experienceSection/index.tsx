import EnjoyablePlace from 'homepage/enjoyable-place-desktop@2x.jpg'
import LocallySourced from 'homepage/locally-sourced-desktop@2x.jpg'
import PatternCurve from 'images/pattern-curve-top-right.svg'
import * as S from './styles'
import lineIcon from 'images/line48.svg'

export default function ExperienceSection() {

    return (
        <S.Section>
            <S.PatternCurve src={PatternCurve}/>
            <S.PatternCurve className='patternCurve-2' src={PatternCurve}/>
            <S.Content>
                <S.Image src={EnjoyablePlace} alt="Enjoyable place" />

                <div>
                    <S.LineBall>
                        <S.Ball></S.Ball>
                        <S.Line src={lineIcon} />
                    </S.LineBall>
                    <S.SubTitle>Enjoyable place for all the family</S.SubTitle>
                    <S.Paragraph>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</S.Paragraph>
                </div>
            </S.Content>


            <S.Content className='inverse'>
              <S.Image src={LocallySourced} alt="Enjoyable place" className='locally' />

                <div>
                    <S.LineBall>
                        <S.Ball></S.Ball>
                        <S.Line src={lineIcon} alt="" />
                    </S.LineBall>
                    <S.SubTitle>The most locally sourced food</S.SubTitle>
                    <S.Paragraph>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</S.Paragraph>
                </div>
            </S.Content>
        </S.Section>
    )
}
