//Images
import FamilyGatheringDesktop from 'homepage/family-gathering-desktop@2x.jpg'
import SocialEvDesktop from 'homepage/social-events-desktop@2x.jpg'
import SpecialEvDesktop from 'homepage/special-events-desktop@2x.jpg'
import PatternLines from 'images/pattern-lines.svg'
import PatternCurve from 'images/pattern-curve-top-right.svg'
//React
import { useEffect, useState } from 'react'
//Styles
import * as S from './styles'
//Components
import { Link } from 'react-router-dom'

export type PropsItem = {
    title: string
    paragraph: string
}

const eventContentInitial = {
    title: 'Family Gathering',
    paragraph: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
};

export default function index() {
    const [imageUrl, setImageUrl] = useState<string>(FamilyGatheringDesktop)
    const [eventContent, setEventContent] = useState(eventContentInitial)
    const [selectedButton, setSelectedButton] = useState<string>('Family Gathering');

    useEffect(() => {
        switch (eventContent.title) {
            case 'Family Gathering':
                setImageUrl(FamilyGatheringDesktop);
                break;
            case 'Specials Events':
                setImageUrl(SpecialEvDesktop);
                break;
            case 'Social Events':
                setImageUrl(SocialEvDesktop);
                break;
            default:
                setImageUrl(FamilyGatheringDesktop);
        }
    }, [eventContent]);

    const array = [
        {
            title: 'Family Gathering',
            paragraph: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
        },

        {
            title: 'Specials Events',
            paragraph: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
        },

        {
            title: 'Social Events',
            paragraph: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
        },
    ]

    return (
        <S.Section>
            <S.PatternCurve src={PatternCurve} alt="" />
            <S.Div>
                <S.ImageDesktop src={imageUrl} alt="Family Gathering" />
                <S.PatternLineImg src={PatternLines} />
            </S.Div>

            <S.Container>

                <S.ContainerButtons>
                    {array.map((item) => (
                        <S.ButtonEvent
                        key={item.title}
                        onClick={() => {
                            setEventContent(item);
                            setSelectedButton(item.title);
                        }}
                        selected={selectedButton === item.title}
                    >
                        {item.title}
                    </S.ButtonEvent>
                    ))}
                </S.ContainerButtons>

                <div>
                    <S.SubTitle>{eventContent.title}</S.SubTitle>
                    <S.Paragraph>{eventContent.paragraph}</S.Paragraph>
                    <Link to='/booking'>
                        <S.Button>BOOK A TABLE</S.Button>
                    </Link>
                </div>
            </S.Container>
        </S.Section>
    )
}
