import Logo from "./Logo"
import { RiUser3Line as LoginIcon } from "@remixicon/react"

const Header = () => {
  return (
    <header>
      <Logo/>
      <button className="btn transparent">
        <LoginIcon/>
        <span>login</span>
      </button>
    </header>
  )
}

export default Header