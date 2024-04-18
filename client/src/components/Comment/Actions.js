import { RiReplyFill } from "@remixicon/react"
import { RiDeleteBinLine } from "@remixicon/react"
import { RiPencilLine } from "@remixicon/react"
import { RiEmotionSadLine } from "@remixicon/react"

const Actions = (props) => {
  const {
    currentUser, user,
    isEditing, toggleEdit,
    isReplying, toggleReply,
  } = props

  return (
    <div className="comment__actions">
      {
        currentUser.username === user.username &&
        <>
          <button className="btn transparent warning">
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
        currentUser.username !== user.username &&
        <button className="btn transparent" onClick={toggleReply}>
          { isReplying ? <RiEmotionSadLine/> : <RiReplyFill/> }
          <span>{ isReplying ? "Nevermind.." : "Reply" }</span>
        </button>
      }
   </div>
  )
}

export default Actions