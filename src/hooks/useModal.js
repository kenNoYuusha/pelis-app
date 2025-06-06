import { useRef, useEffect, useState } from 'react';

export function useModal({ contentData }) {
  const dialogRef = useRef();
  const [isOpen, setIsOpen] = useState(false)


  useEffect(() => {
    if (Object.keys(contentData).length > 0) {
      setIsOpen(true)
      dialogRef.current.showModal();
      document.body.style.overflow='hidden';
    }
  }, [contentData]);

  const closeModal = () => {
    dialogRef.current.close();
    document.body.style.overflow='auto';
  };

  const handleClose = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  return {
    dialogRef,
    closeModal,
    isOpen,
    handleClose,
  };
}
