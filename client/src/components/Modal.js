const Modal = ({ className, children, hide }) => {
  return (
    <div className="modal">
      <div className={`modal__container card ${className}`}>
        { children }
      </div>

      <div className="modal__background" onClick={hide}/>
    </div>
  )
}

export default Modal