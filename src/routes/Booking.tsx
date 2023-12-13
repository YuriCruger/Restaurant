import ReserveHeader from '../components/booking/reserveHeader'
import Form, { FormProps } from '../components/booking/formReserve'
import { useState } from 'react';
import Modal from '../components/booking/modal';

export default function Booking() {
  const [modalOpen, setModalOpen] = useState(false);
  const [people, setPeople] = useState<number>(1)
  const [reserveData, setReserveData] = useState<FormProps | null>(null);

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <ReserveHeader />
      <Form 
      setReserveData={setReserveData}
      people={people}
      setPeople={setPeople}
      setModalOpen={setModalOpen}
      modalOpen={modalOpen}
      />
      {modalOpen && <Modal people={people} reserveData={reserveData} closeModal={closeModal} />}
    </div>
  )
}
