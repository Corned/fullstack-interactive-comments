

import ProfilePicture from "./ProfilePicture"


const CommentForm = ({ buttonLabel, currentUser }) => {
  return (
    <div className="card comment-form">
      <ProfilePicture src={currentUser.image.webp}/>
      <textarea
        resizable="false"
        placeholder="What do you have to say for yourself? Huh?? Really, nothing?"
      ></textarea>
      <button className="btn solid"><span>{ buttonLabel }</span></button>
    </div>
  )
}

export default CommentForm