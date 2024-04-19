const Modal = ({ className, children }) => {
  return (
    <div className="modal">
      <div className={`modal__container card ${className}`}>
        { children }
      </div>

      <div className="modal__background"/>
    </div>
  )
}

export default Modal