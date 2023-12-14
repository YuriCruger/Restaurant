import ReserveHeader from './components/reserveHeader'
import Form, { FormProps } from './components/formReserve'
import { useState } from 'react';
import Modal from './components/modal';

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
