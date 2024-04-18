const Vote = ({ score }) => {
  return (
    <div className="comment__vote">
      <button className="comment__vote-up">+</button>
      <p className="comment__vote-count">{ score }</p>
      <button className="comment__vote-down">-</button>
    </div>
  )
}

export default Vote