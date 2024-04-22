import { useState } from "react"

import Logo from "components/Logo"
import OAuthButtons from "./OAuthButtons"
import Modal from "components/Modal"
import StateSelector from "components/StateSelector"
import LoginForm from "./LogIn"
import SignUpForm from "./SignUp"
import { useContext } from "react"
import { UserContext } from "context/UserContext"


const LoginAndRegistration = ({ hide }) => {
  const [ user ] = useContext(UserContext)
  const [ state, setState ] = useState("sign in")

  if (user) {
    hide()
    return
  }

  return (
    <Modal className="login-and-registration" hide={hide}>

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