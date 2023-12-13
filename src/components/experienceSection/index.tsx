import enjoyablePlaceMobile from '../../../public/assets/homepage/enjoyable-place-mobile@2x.jpg'
import enjoyablePlaceTablet from '../../../public/assets/homepage/enjoyable-place-tablet@2x.jpg'
import enjoyablePlaceDesktop from '../../../public/assets/homepage/enjoyable-place-desktop@2x.jpg'
import BgImage from '../../../public/images/pattern-curve-top-right.svg'
import * as S from './styles'
import lineIcon from '../../../public/images/line48.svg'
import ResponsiveImage from '../ResponsiveImage'

export default function ExperienceSection() {

    return (
        <S.Section>
            <S.BackgroundImg src={BgImage}/>
            <S.BackgroundImg className='backgroundImg-2' src={BgImage}/>
            <S.Content>
                <S.ImageMobile src={enjoyablePlaceMobile} alt="Enjoyable place" />
                <S.ImageTablet src={enjoyablePlaceTablet} alt="Enjoyable place" />
                <S.ImageDesktop src={enjoyablePlaceDesktop} alt="Enjoyable place" />

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
                <ResponsiveImage
                    mobileSrc="../../../public/assets/homepage/locally-sourced-mobile@2x.jpg"
                    tabletSrc="../../../public/assets/homepage/locally-sourced-tablet@2x.jpg"
                    desktopSrc="../../../public/assets/homepage/locally-sourced-desktop@2x.jpg"
                    alt="Locally sourced food"
                />


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
