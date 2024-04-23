import { RiReplyFill } from "@remixicon/react"
import { RiDeleteBinLine } from "@remixicon/react"
import { RiPencilLine } from "@remixicon/react"
import { RiEmotionSadLine } from "@remixicon/react"

import { useContext } from "react"
import { UserContext } from "context/UserContext"

const Actions = (props) => {
  const [ currentUser ] = useContext(UserContext)

  const {
    owner,
    isEditing, toggleEdit,
    isReplying, toggleReply,
  } = props

  return (
    <div className="comment__actions">
      {
        !currentUser &&
        <></>
      }
      {
        currentUser && currentUser?.username === owner.username &&
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