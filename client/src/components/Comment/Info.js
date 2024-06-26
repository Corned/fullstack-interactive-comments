import ProfilePicture from "components/ProfilePicture"
import Moment from "react-moment"


import { useContext } from "react"
import { UserContext } from "context/UserContext"

const Info = ({ owner, createdAt }) => {
  const [ currentUser ] = useContext(UserContext)

  return (
    <div className="comment__info">
      <ProfilePicture 
        className="comment__info-pfp"
        //src={user.image.webp}
      />
      <p className="comment__info-name">{ owner.username }</p>
      
      {
        currentUser?.username === owner.username &&
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