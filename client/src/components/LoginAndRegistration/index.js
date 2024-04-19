import Modal from "components/Modal"
import OAuthButtons from "./OAuthButtons"

import classNames from "classnames"
import { useState } from "react"
import StateSelector from "components/StateSelector"

const LoginAndRegistration = () => {
  const [ state, setState ] = useState("sign in")

  return (
    <Modal className="login-and-registration">

      <StateSelector
        states={[ "sign in", "sign up" ]}
        setState={setState}
        activeState={state}
      />

      <div className="login-and-registration__or-with">
        <div></div>
        <p>or log in with</p>
        <div></div>
      </div>

      <OAuthButtons/>
    </Modal>
  )
}

export default LoginAndRegistration