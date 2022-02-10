import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

// interface ModalProps {
//   isOpen: Boolean;
//   setIsOpen: () => void;
//   children: ReactNode;
// }

export function Modal(props) {
  const [modalStatus, setModalStatus] = useState()

  useEffect(() => {
    if(modalStatus !== props.isOpen) {
      setModalStatus(props.isOpen)
    }
  }, [props.isOpen, modalStatus])
  

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={props.setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {props.children}
    </ReactModal>
  );
}



