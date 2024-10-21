import { createPortal } from 'react-dom';
import { useModal } from '../hooks/useModal';

export function Modal({ contentData, content }) {
  const { 
    dialogRef,
    closeModal, 
    isOpen, 
    handleClose,
  } = useModal({ contentData });

  const contentDataConditional = isOpen ? contentData : {}

  return createPortal(
    <dialog ref={dialogRef} onClose={handleClose}>
      <button onClick={closeModal} aria-label="Cerrar">
        X
      </button>
      {content(contentDataConditional)}
    </dialog>,
    document.getElementById('modal')
  )
}
