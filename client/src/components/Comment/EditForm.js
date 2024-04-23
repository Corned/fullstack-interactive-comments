
import { useForm } from "react-hook-form"
import CommentService from "services/CommentService"

const EditForm = ({ commentId, content }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (formData, event) => {
    console.log(commentId, formData);
    const data = await CommentService.edit(commentId, formData.content)
  })

  return (
    <form {...{onSubmit}} className="comment__edit-form comment__content">
      <textarea
        { ...register("content") }
        resizable="false"
        placeholder="C'mon, don't leave me empty!"
        defaultValue={content}
      ></textarea>
      <button type="submit" className="btn solid"><span>UPDATE</span></button>
    </form>
  )
}

export default EditForm