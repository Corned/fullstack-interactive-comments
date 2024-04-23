
import { CommentContext } from "context/CommentText"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import CommentService from "services/CommentService"

const EditForm = ({ commentId, content, setIsEditing }) => {
  const [ comments, setComments ] = useContext(CommentContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (formData, event) => {
    const data = await CommentService.edit(commentId, formData.content)
    
    setComments((oldData) => {
      return oldData.map((comment) => {
        if (comment._id === data._id) {
          return {
            ...comment,
            content: data.content
          }
        }

        return comment
      })
    })
    
    setIsEditing(false)
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