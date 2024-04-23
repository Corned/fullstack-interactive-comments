import { useEffect, useState } from "react"

import Vote from "components/Comment/Vote"
import Actions from "components/Comment/Actions"
import Info from "components/Comment/Info"
import Content from "components/Comment/Content"
import EditForm from "components/Comment/EditForm"
import CommentForm from "components/CommentForm"

import CommentService from "services/CommentService"

const Comment = ({ rootId, commentData }) => {
  const [ isEditing, setIsEditing ] = useState(false)
  const [ isReplying, setIsReplying ] = useState(false)

  const [ replies, setReplies ] = useState([])

  // Get replies
  useEffect(() => {
    const get = async (id) => {
      const data = await CommentService.getRepliesByParentId(id)
      setReplies(data)
    }

    if (commentData.replies.length > 0) {
      get(commentData._id)
    }
  }, [ ])

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
          ? <EditForm commentId={commentData._id} content={commentData.content} /> 
          : <Content content={commentData.content} />
        }
      </div>


      {
        isReplying &&
        <CommentForm
          buttonLabel="reply"
          replyingTo={commentData.owner}
          parentId={rootId}
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
                  rootId={rootId}
                  commentData={comment}
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