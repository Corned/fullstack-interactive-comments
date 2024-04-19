const Modal = ({ className, children }) => {
  return (
    <div className={`modal ${className}`}>
      <div className="modal__container card">
        { children }
      </div>

      <div className="modal__background"/>
    </div>
  )
}

export default Modal