import ProfilePicture from "components/ProfilePicture"
import Moment from "react-moment"

const Info = ({ currentUser, user, createdAt }) => {
  return (
    <div className="comment__info">
      <ProfilePicture 
        className="comment__info-pfp"
        //src={user.image.webp}
      />
      <p className="comment__info-name">{ user.username }</p>
      
      {
        currentUser?.username === user.username &&
        <div className="comment__info-badge">
          <p>you</p>
        </div>
      }

      <p className="comment__info-date">
        <Moment fromNow ago>{ createdAt }</Moment> ago
      </p>
    </div>
  )
}

export default Info