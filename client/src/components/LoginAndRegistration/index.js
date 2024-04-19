import { useState } from "react"
import { useForm } from "react-hook-form"

import Logo from "components/Logo"
import OAuthButtons from "./OAuthButtons"
import Modal from "components/Modal"
import StateSelector from "components/StateSelector"


const LoginAndRegistration = () => {
  const [ state, setState ] = useState("sign in")

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {

  }

  return (
    <Modal className="login-and-registration">

      <div className="header">
        <Logo/>
        <p>Welcome! Please enter your details.</p>
      </div>

      <StateSelector
        states={[ "sign in", "sign up" ]}
        setState={setState}
        activeState={state}
      />

      {
        state === "sign in" &&
        <>
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

            <button className="btn solid">Log in!</button>
          </form>

          <div className="login-and-registration__or-with">
            <div></div>
            <p>or log in with</p>
            <div></div>
          </div>

          <OAuthButtons/>
        </>
      }

      {
        state === "sign up" &&
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

          <button className="btn solid">Sign up!</button>
        </form>

      }



    </Modal>
  )
}

export default LoginAndRegistration