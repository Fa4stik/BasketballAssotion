import React from "react";

const Modal = ({active, setactive}) => {
  return(
    <div className={active ?
      "h-screen w-screen bg-black bg-opacity-40 fixed top-0 left-0 flex items-center justify-center transform scale-0" :
      "scale-1"} onClick={() => setactive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>

      </div>
    </div>
  );
};

export default Modal;
