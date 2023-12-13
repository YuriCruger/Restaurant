//Images
import FamilyGatheringMobile from '../../../public/assets/homepage/family-gathering-mobile@2x.jpg'
import FamilyGatheringTablet from '../../../public/assets/homepage/family-gathering-tablet@2x.jpg'
import FamilyGatheringDesktop from '../../../public/assets/homepage/family-gathering-desktop@2x.jpg'

import SocialEvMobile from '../../../public/assets/homepage/social-events-mobile@2x.jpg'
import SocialEvTablet from '../../../public/assets/homepage/social-events-tablet@2x.jpg'
import SocialEvDesktop from '../../../public/assets/homepage/social-events-desktop@2x.jpg'

import SpecialEvMobile from '../../../public/assets/homepage/special-events-mobile@2x.jpg'
import SpecialEvTablet from '../../../public/assets/homepage/special-events-tablet@2x.jpg'
import SpecialEvDesktop from '../../../public/assets/homepage/special-events-desktop@2x.jpg'

import PatternLines from '../../../public/images/pattern-lines.svg'
import BgImage from '../../../public/images/pattern-curve-top-right.svg'
//React
import { useEffect, useState } from 'react'
//Styles
import * as S from './styles'
//Components
import FamilyDescribe from './FamilyDescribe'
import SpecialEventsDescribe from './SpecialEventsDescribe'
import SocialEventsDescribe from './SocialEventsDescribe'
import { Link } from 'react-router-dom'

export default function index() {
    const [selectedEvent, setSelectedEvent] = useState<string | null>('Family Gathering');
    const [screenSize, setScreenSize] = useState(getScreenSize());

    function getScreenSize() {
        const width = window.innerWidth;
        if (width < 768) {
            return 'mobile';
        }
        if (width < 1024) {
            return 'tablet';
        }
        return 'desktop';
    }

    useEffect(() => {
        function handleResize() {
            setScreenSize(getScreenSize());
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let imageUrl;

    switch (selectedEvent) {
        case 'Family Gathering':
            imageUrl =
                screenSize === 'mobile'
                    ? FamilyGatheringMobile
                    : screenSize === 'tablet'
                        ? FamilyGatheringTablet
                        : FamilyGatheringDesktop;
            break;
        case 'Social Events':
            imageUrl =
                screenSize === 'mobile'
                    ? SocialEvMobile
                    : screenSize === 'tablet'
                        ? SocialEvTablet
                        : SocialEvDesktop;
            break;
        case 'Special Events':
            imageUrl =
                screenSize === 'mobile'
                    ? SpecialEvMobile
                    : screenSize === 'tablet'
                        ? SpecialEvTablet
                        : SpecialEvDesktop;
            break;
        default:
            imageUrl = FamilyGatheringMobile;
    }

    const handleEventClick = (event: string) => {
        setSelectedEvent(event);
    };

    let eventDescription;

    switch (selectedEvent) {
        case 'Family Gathering':
            eventDescription = <FamilyDescribe />;
            break;
        case 'Special Events':
            eventDescription = <SpecialEventsDescribe />;
            break;
        case 'Social Events':
            eventDescription = <SocialEventsDescribe />;
            break;
        default:
            eventDescription = null;
    }

    return (
        <S.Section>
            <S.BackgroundImg src={BgImage} alt="" />
            <S.Div>

                <S.ImageMobile src={imageUrl} alt="Family Gathering" />
                <S.ImageTablet src={imageUrl} alt="Family Gathering" />
                <S.ImageDesktop src={imageUrl} alt="Family Gathering" />

                <S.PatternLineImg src={PatternLines} />
            </S.Div>

            <S.Container>

                <S.ContainerButtons>
                    <S.ButtonEvent onClick={() => handleEventClick('Family Gathering')}>Family Gathering</S.ButtonEvent>
                    <S.ButtonEvent onClick={() => handleEventClick('Special Events')}>Special Events</S.ButtonEvent>
                    <S.ButtonEvent onClick={() => handleEventClick('Social Events')}>Social Events</S.ButtonEvent>
                </S.ContainerButtons>

                <div>
                    {eventDescription && (
                        <>
                            {eventDescription}
                            <Link to='/booking'>
                                <S.Button>BOOK A TABLE</S.Button>
                            </Link>
                        </>
                    )}
                </div>
            </S.Container>
        </S.Section>
    )
}
