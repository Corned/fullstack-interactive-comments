import { useState } from "react"
import { useForm } from "react-hook-form"

const LoginForm = () => {
  const [ error, setError ] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (formData, event) => {
    delete formData["password-confirm"]
    console.log(`Signing in as "${ JSON.stringify(formData) }"`);
    
    const response = await fetch("/auth/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()
    if (data.error) {
      return setError(data.error)
    }

    // Logged in successfully. :D
    console.log(data);
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