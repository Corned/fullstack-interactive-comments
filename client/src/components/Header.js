import { useState, useContext } from "react"
import { UserContext } from "context/UserContext"
import { RiUser3Line as LoginIcon } from "@remixicon/react"

import Logo from "./Logo"
import LoginAndRegistration from "./LoginAndRegistration"
import AuthService from "services/AuthService"
import { CommentContext } from "context/CommentText"
import CommentService from "services/CommentService"

const Header = () => {
  const [ user, setUser ] = useContext(UserContext)
  const [ comments, setComments ] = useContext(CommentContext)
  const [ displayModal, setDisplayModal ] = useState(false)

  const logout = async () => {
    try {
      await AuthService.logout(setUser)
      const comments = await CommentService.getAll()
      setComments(comments)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <header key="HEADER!!">
      <Logo/>

      {
        user && (
          <div className="header__user">
            <p>Logged in as { user.username }</p>
            <button className="btn transparent" onClick={logout}>logout</button> 
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