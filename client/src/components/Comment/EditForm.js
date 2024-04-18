const EditForm = ({ content }) => {
  return (
    <div className="comment__edit-form comment__content">
      <textarea
        resizable="false"
        placeholder="C'mon, don't leave me empty!"
      >{ content }</textarea>
      <button className="btn solid"><span>UPDATE</span></button>
    </div>
  )
}

export default EditForm