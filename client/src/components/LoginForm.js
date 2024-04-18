import { useForm } from "react-hook-form"

import Modal from "./Modal"
import Logo from "./Logo"

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Modal>
      <div className="login-form">
        <div>
          <Logo/>
          <p>Welcome back! Please enter your details.</p>
        </div>

        <div>
          <div className="login-form__sign-in-toggle">
            <button className="">sign in</button>
            <button className="">sign up</button>
          </div>

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
                {...register("password-confirm")}
              />
            </div>

            <button className="btn solid">Log in!</button>
          </form>



        </div>
      </div>
    </Modal>
  )
}

export default LoginForm