import Logo from "./Logo"
import { RiUser3Line as LoginIcon } from "@remixicon/react"


import LoginAndRegistration from "./LoginAndRegistration"
import { useState } from "react"

const Header = () => {
  const [ displayModal, setDisplayModal ] = useState(false)

  return (
    <>
    <header>
      <Logo/>
      <button className="btn transparent" onClick={() => setDisplayModal(true)}>
        <LoginIcon/>
        <span>login</span>
      </button>

    { displayModal && (
      <LoginAndRegistration
        hide={() => setDisplayModal(false)}
      />
    )}
    </header>
    
    </>
  )
}

export default Header