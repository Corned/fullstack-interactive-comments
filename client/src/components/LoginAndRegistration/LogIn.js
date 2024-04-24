import { UserContext } from "context/UserContext"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import AuthService from "services/AuthService"
import CommentService from "services/CommentService"
import { CommentContext } from "context/CommentText"

const LoginForm = () => {
  const [ user, setUser ] = useContext(UserContext)
  const [ comments, setComments ] = useContext(CommentContext)

  const [ error, setError ] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (formData, event) => {
    try {
      await AuthService.login(setUser, formData.username, formData.password)

      const comments = await CommentService.getAll()
      setComments(comments)
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }
  })

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label for="name">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          {...register("username")}
        />
      </div>  
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>  

      <button type="submit" className="btn solid">Log in!</button>

      { error && <p className="error">{ error }</p>}

    </form>
  )
}

export default LoginForm