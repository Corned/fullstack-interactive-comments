import { useState } from "react"
import { useForm } from "react-hook-form"

// TODO:
// Proper client side form input checks.

const SignUpForm = () => {
  const [ error, setError ] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (formData, event) => {
    console.log(`Registering as "${ JSON.stringify(formData) }"`);
    
    const response = await fetch("/user", {
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

    // User created successfully.
    


  })

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label for="name">Thy username sire:</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          {...register("username")}
        />
      </div>  
      <div>
        <label for="password">Choose a strong password!</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>  
      <div>
        <label for="password-confirm">Now, repeat it!</label>
        <input
          type="password"
          name="password-confirm"
          placeholder="Password"
          {...register("passwordConfirm")}
        />
      </div>

      <button className="btn solid">Sign up!</button>
      
      { error && <p className="error">{ error }</p>}

    </form>
  )
}

export default SignUpForm