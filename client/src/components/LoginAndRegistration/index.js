import { useState } from "react"
import { useForm } from "react-hook-form"

import Logo from "components/Logo"
import OAuthButtons from "./OAuthButtons"
import Modal from "components/Modal"
import StateSelector from "components/StateSelector"
import LoginForm from "./LogIn"
import SignUpForm from "./SignUp"


const LoginAndRegistration = () => {
  const [ state, setState ] = useState("sign in")

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmitSignUp = handleSubmit((data, event) => {
    console.log(`Registering as "${ JSON.stringify(data) }"`);
  })

  const onSubmitSignIn = handleSubmit((data, event) => {
    console.log(`Signing in as "${ JSON.stringify(data) }"`);
  })

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
          <LoginForm register={register} onSubmit={onSubmitSignIn}/>

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
        <SignUpForm register={register} onSubmit={onSubmitSignUp}/>
      }



    </Modal>
  )
}

export default LoginAndRegistration