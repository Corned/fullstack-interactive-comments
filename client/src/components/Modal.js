const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal__container card">
        { children }
      </div>

      <div className="modal__background"/>
    </div>
  )
}

export default Modal