import { RiGithubFill as GithubIcon } from "@remixicon/react"
import { RiGlobalLine as WebsiteIcon } from "@remixicon/react"

const Footer = () => {
  return (
    <footer>
      <div className="footer__links">
        <a
          className="footer__link"
          href="https://github.com/Corned/fullstack-interactive-comments"
          rel="noreferrer"
          target="_blank"
        >
          <GithubIcon/>
        </a>
        <a
          className="footer__link"
          href="https://tmp.ooo/"
          rel="noreferrer"
          target="_blank"
        >
          <WebsiteIcon/>
        </a>
      </div>
      <p className="footer__text">made with 💻, ⚛️, 🩸, 💦 & 😭</p>
    </footer>
  )
}

export default Footer