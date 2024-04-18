
import Vote from "components/Comment/Vote"
import Actions from "components/Comment/Actions"
import Info from "components/Comment/Info"
import Content from "components/Comment/Content"
import EditForm from "components/Comment/EditForm"

import { useState } from "react"
import CommentForm from "components/CommentForm"

const Comment = ({ currentUser, commentData }) => {
  const [ isEditing, setIsEditing ] = useState(false)
  const [ isReplying, setIsReplying ] = useState(false)

  const handleEditButton = () => {
    setIsEditing(!isEditing)
  }
  
  const handleReplyButton = () => {
    setIsReplying(!isReplying)
  }

  const {
    score,
    content,
    createdAt,
    user,
    replies,
  } = commentData

  return (
    <div className="comment-wrapper">
      <div className="card comment">
        <Vote
          score={score}
        />

        <Info
          currentUser={currentUser}
          user={user}
          createdAt={createdAt}
        />

        <Actions
          currentUser={currentUser}
          user={user}

          isReplying={isReplying}
          toggleReply={handleReplyButton}

          isEditing={isEditing}
          toggleEdit={handleEditButton}
        />

        {
          isEditing
          ? (
            <EditForm
              content={content}
            />
          ) : (
            <Content
              content={content}
            />
          )
        }
      </div>


      {
        isReplying &&
        <CommentForm buttonLabel="reply" currentUser={currentUser}/>
      }

      {
        replies?.length > 0 &&
        <div className="comment__children-container">
          <div className="comment__children-line"/>
          <div className="comment__childen list">
            { 
              replies.map((comment) => 
                <Comment
                  commentData={comment}
                  currentUser={currentUser}
                />
              )
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Comment