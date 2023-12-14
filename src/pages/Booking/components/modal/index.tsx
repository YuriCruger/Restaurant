import { X } from "lucide-react";
import * as S from './styles'
import { FormProps } from "../formReserve";
import { useEffect, useRef } from "react";

interface PropsModal {
    people: number;
    reserveData: FormProps | null;
    closeModal: () => void;
}

export default function Modal({ people, reserveData, closeModal }: PropsModal) {
    const contentRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
            closeModal();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [contentRef, closeModal]);

    return (
        <S.ModalContainer>
            <S.BackVisual />
            <S.Content ref={contentRef}>
                <S.Close>
                    <X onClick={closeModal} style={{cursor: 'pointer'}}/>
                </S.Close>
                <S.Title>Your reservation is confirmed</S.Title>

                <S.DataContent>
                    <p>Name:</p>
                    <p>{reserveData?.name}</p>
                </S.DataContent>

                <S.DataContent>
                    <p>E-mail:</p>
                    <p>{reserveData?.email}</p>
                </S.DataContent>

                <S.DataContent>
                    <p>Table for</p>
                    <p>{people}</p>
                </S.DataContent>

                <S.Infos>
                    <div>
                        <p>Dine</p>
                        <p>Marthwaite, Sedbergh. Cumbria</p>
                        <p>+00 44 123 4567</p>
                    </div>

                    <div>
                        <p>OPEN TIMES</p>
                        <p>MON - FRI: 09:00 AM - 10:00 PM</p>
                        <p>SAT - SUN: 09:00 AM - 11:30PM</p>
                    </div>
                </S.Infos>
                
                <S.Button onClick={closeModal}>CLOSE</S.Button>
            </S.Content>
        </S.ModalContainer>
    );
}
