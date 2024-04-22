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
        state === "sign in" && (
          <>
            <LoginForm />

            <div className="login-and-registration__or-with">
              <div></div>
              <p>or log in with</p>
              <div></div>
            </div>

            <OAuthButtons/>
          </>
        )
      }

      {
        state === "sign up" && (
          <SignUpForm />
        )
      }



    </Modal>
  )
}

export default LoginAndRegistration