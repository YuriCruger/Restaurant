import { Github } from 'lucide-react';
import * as S from './styles'
import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();

    function handleNavigate() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        navigate("/");
    }

    function openGit() {
        window.open('https://github.com/YuriCruger', '_blank')
    }

    return (
        <S.Footer>

            <S.Container>
                <S.ContainerLogo>
                    <S.Logo onClick={handleNavigate}>dine</S.Logo>
                </S.ContainerLogo>
                <S.Content>
                    <S.SubContent>
                        <S.InfoText>MARTHWAITE, SEDBERGH</S.InfoText>
                        <S.InfoText>CUMBRIA</S.InfoText>
                        <S.InfoText>+00 44 123 4567</S.InfoText>
                    </S.SubContent>

                    <S.SubContent>
                        <S.InfoText>OPEN TIMES</S.InfoText>
                        <S.InfoText>MON - FRI: 09:00 AM - 10:00 PM</S.InfoText>
                        <S.InfoText>SAT - SUN: 09:00 AM - 11:30PM</S.InfoText>
                    </S.SubContent>
                </S.Content>
            </S.Container>

            <S.Credits>
                <p>Code challenge by Frontend Mentor • Made by Yuri Cruger</p>
                <Github onClick={openGit} size={40} style={{ cursor: 'pointer' }} />
            </S.Credits>
        </S.Footer>
    )
}
