import { RiTwitterXLine } from "@remixicon/react"
import { RiGithubLine } from "@remixicon/react"
import { RiAppleLine } from "@remixicon/react"
import { RiGoogleFill } from "@remixicon/react"
import { RiDiscordFill } from "@remixicon/react"
import { RiTaobaoFill } from "@remixicon/react"

const pairs = [
  { icon: <RiTwitterXLine/>,  name: "Twitter" },
  { icon: <RiGithubLine/>,    name: "GitHub" },
  { icon: <RiAppleLine/>,     name: "Apple" },
  { icon: <RiGoogleFill/>,    name: "Google" },
  { icon: <RiDiscordFill/>,   name: "Discord" },
  { icon: <RiTaobaoFill/>,    name: "Taobao" },
]

const OAuthButtons = () => {
  return (
    <div className="oauth-container">

      {
        pairs.map(({ icon, name }) => {
          return (
            <button>
              { icon }
              <span>{ name }</span>
            </button>
          )
        })
      }

    </div>
  )
}

export default OAuthButtons