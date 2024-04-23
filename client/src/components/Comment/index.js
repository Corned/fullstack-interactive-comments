import { useContext, useState } from "react"
import { CommentContext } from "context/CommentText"

import Vote from "components/Comment/Vote"
import Actions from "components/Comment/Actions"
import Info from "components/Comment/Info"
import Content from "components/Comment/Content"
import EditForm from "components/Comment/EditForm"
import CommentForm from "components/CommentForm"

const Comment = ({ renderReplies, rootId, commentData }) => {
  const [ isEditing, setIsEditing ] = useState(false)
  const [ isReplying, setIsReplying ] = useState(false)
  const [ comments ] = useContext(CommentContext)

  const handleEditButton = () => {
    setIsEditing(!isEditing)
  }
  
  const handleReplyButton = () => {
    setIsReplying(!isReplying)
  }

  // Comment id of the comment at the top of the chain of comments
  // All replies to this comment or the comment's children
  // will have this id as their parent
  rootId = rootId || commentData._id

  const shouldRenderReplies = renderReplies === true 
    && commentData.replies.length > 0

  return (
    <div className="comment-wrapper">
      <div className="card comment">
        <Vote
          score={commentData.votes.length}
        />

        <Info
          owner={commentData.owner}
          createdAt={commentData.createdAt}
        />

        <Actions
          owner={commentData.owner}
          commentId={commentData._id}

          isReplying={isReplying}
          toggleReply={handleReplyButton}

          isEditing={isEditing}
          toggleEdit={handleEditButton}
        />

        {
          isEditing
          ? <EditForm
            commentId={commentData._id}
            content={commentData.content}
            setIsEditing={setIsEditing}
          /> 
          : <Content content={commentData.content} />
        }
      </div>
      
      {
        isReplying &&
        <CommentForm
          buttonLabel="reply"
          setIsReplying={setIsReplying}
          replyingTo={commentData.owner}
          parentId={rootId}
        />
      }

      {
        shouldRenderReplies &&
        <div className="comment__children-container">
          <div className="comment__children-line"/>
          <div className="comment__childen list">
            { 
              comments.map((comment) =>
                comment.parent === rootId ?
                <Comment
                  rootId={rootId}
                  commentData={comment}
                /> : <></>
              )
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Comment