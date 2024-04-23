import { RiReplyFill } from "@remixicon/react"
import { RiDeleteBinLine } from "@remixicon/react"
import { RiPencilLine } from "@remixicon/react"
import { RiEmotionSadLine } from "@remixicon/react"

import { useContext } from "react"
import { UserContext } from "context/UserContext"
import CommentService from "services/CommentService"
import { CommentContext } from "context/CommentText"

const Actions = (props) => {
  const [ comments, setComments ] = useContext(CommentContext)
  const [ currentUser ] = useContext(UserContext)

  const {
    owner, commentId,
    isEditing, toggleEdit,
    isReplying, toggleReply,
  } = props

  const handleDelete = async () => {
    const { ids } = await CommentService.destroy(commentId)

    setComments((oldComments) => {
      return oldComments.filter((comment) => {
        return !ids.includes(comment._id)
      })
    })
  }

  return (
    <div className="comment__actions">
      {
        !currentUser &&
        <></>
      }
      {
        currentUser && currentUser?.username === owner.username &&
        <>
          <button className="btn transparent warning" onClick={handleDelete}>
            <RiDeleteBinLine/>
            <span>Delete</span>
          </button>
          <button className="btn transparent" onClick={toggleEdit}>
          { isEditing ? <RiEmotionSadLine/> : <RiPencilLine/> }
            <span>{ isEditing ? "Nevermind.." : "Edit" }</span>
          </button>
        </>
      }
      {
        currentUser && currentUser?.username !== owner.username &&
        <button className="btn transparent" onClick={toggleReply}>
          { isReplying ? <RiEmotionSadLine/> : <RiReplyFill/> }
          <span>{ isReplying ? "Nevermind.." : "Reply" }</span>
        </button>
      }
   </div>
  )
}

export default Actions