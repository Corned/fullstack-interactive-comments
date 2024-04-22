

import { useForm } from "react-hook-form"
import ProfilePicture from "./ProfilePicture"
import CommentService from "services/CommentService"


const CommentForm = ({ buttonLabel, currentUser, parentId = null }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (formData, event) => {
    console.log(formData.content);

    const newComment = await CommentService.create(
      formData.content, parentId
    )
  })

  return (
    <form className="card comment-form" onSubmit={onSubmit}>
      <ProfilePicture/>
      <textarea
        resizable="false"
        placeholder="What do you have to say for yourself? Huh?? Really, nothing?"
        {...register("content")}
      ></textarea>
      <button type="submit" className="btn solid"><span>{ buttonLabel }</span></button>
    </form>
  )
}

export default CommentForm