import { useClickAway } from "@uidotdev/usehooks";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

const AddDoctorModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const handleOpenModal = () => {
    if (isOpen === false) {
      setIsOpen(true);
    }
  };
  return (
    <>
      <section>
        <h1>useClickAway</h1>
        <button className="link" onClick={handleOpenModal}>
          Open Modal
        </button>
      </section>
      {isOpen && (
        <dialog ref={ref}>
          <button onClick={() => setIsOpen(false)}><IoIosClose /></button>
          <h2>Modal</h2>
          <p>
            Click outside the modal to close (or use the button) whatever you
            prefer.
          </p>
        </dialog>
      )}
    </>
  );
};

export default AddDoctorModal;
