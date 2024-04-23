import { useState, useContext } from "react"
import { UserContext } from "context/UserContext"
import { RiUser3Line as LoginIcon } from "@remixicon/react"

import Logo from "./Logo"
import LoginAndRegistration from "./LoginAndRegistration"
import AuthService from "services/AuthService"

const Header = () => {
  const [ user, setUser ] = useContext(UserContext)
  const [ displayModal, setDisplayModal ] = useState(false)

  const logout = async () => {
    try {
      await AuthService.logout(setUser)
      
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <header>
      <Logo/>

      {
        user && (
          <div>
            <p>Logged in as { user.username }</p>
            <button className="btn transparent" onClick={logout}>logout :(</button> 
          </div>
          
        )
      }

      {
        !user && (
          <button className="btn transparent" onClick={() => setDisplayModal(true)}>
            <LoginIcon/>
            <span>login</span>
          </button>
        )
      }

      { displayModal && (
        <LoginAndRegistration
          hide={() => setDisplayModal(false)}
        />
      )}
    </header>
  )
}

export default Header