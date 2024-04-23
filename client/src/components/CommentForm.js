

import { useForm } from "react-hook-form"
import ProfilePicture from "./ProfilePicture"
import CommentService from "services/CommentService"

import { useContext } from "react"
import { CommentContext } from "context/CommentText"


const CommentForm = ({ buttonLabel, replyingTo, parentId = null }) => {
  const [ comments, setComments ] = useContext(CommentContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (formData, event) => {
    const newComment = await CommentService.create(
      formData.content, parentId
    )

    setComments([
      ...comments,
      newComment
    ])
  })

  return (
    <form className="card comment-form" onSubmit={onSubmit}>
      <ProfilePicture/>
      <textarea
        resizable="false"
        placeholder="What do you have to say for yourself? Huh?? Really, nothing?"
        defaultValue={ replyingTo ? `@${replyingTo.username}, ` : ""}
        {...register("content")}
      ></textarea>
      <button type="submit" className="btn solid"><span>{ buttonLabel }</span></button>
    </form>
  )
}

export default CommentForm