
import Vote from "components/Comment/Vote"
import Actions from "components/Comment/Actions"
import Info from "components/Comment/Info"
import Content from "components/Comment/Content"
import EditForm from "components/Comment/EditForm"

import { useContext, useState } from "react"
import { UserContext } from "context/UserContext"

import CommentForm from "components/CommentForm"

const Comment = ({ commentData }) => {
  const [ user ] = useContext(UserContext)

  const [ isEditing, setIsEditing ] = useState(false)
  const [ isReplying, setIsReplying ] = useState(false)

  const handleEditButton = () => {
    setIsEditing(!isEditing)
  }
  
  const handleReplyButton = () => {
    setIsReplying(!isReplying)
  }

  const {
    votes,
    content,
    createdAt,
    owner,
    replies,
    parent,
  } = commentData

  return (
    <div className="comment-wrapper">
      <div className="card comment">
        <Vote
          score={votes.length}
        />

        <Info
          currentUser={user}
          user={owner}
          createdAt={createdAt}
        />

        <Actions
          currentUser={user}
          user={owner}

          isReplying={isReplying}
          toggleReply={handleReplyButton}

          isEditing={isEditing}
          toggleEdit={handleEditButton}
        />

        {
          isEditing
          ? <EditForm content={content} /> 
          : <Content content={content} />
        }
      </div>


      {
        isReplying &&
        <CommentForm
          buttonLabel="reply"
          currentUser={user}
          parentId={commentData._id}
        />
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
                  currentUser={user}
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