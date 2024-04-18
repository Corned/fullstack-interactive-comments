import { useForm } from "react-hook-form"

import { RiTwitterXLine } from "@remixicon/react"
import { RiGithubLine } from "@remixicon/react"
import { RiAppleLine } from "@remixicon/react"
import { RiGoogleFill } from "@remixicon/react"
import { RiDiscordFill } from "@remixicon/react"
import { RiTaobaoFill } from "@remixicon/react"

import Modal from "./Modal"
import Logo from "./Logo"

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Modal>
      <div className="login-form">
        <div>
          <Logo/>
          <p>Welcome back! Please enter your details.</p>
        </div>

        <div>
          <div className="login-form__sign-in-toggle">
            <button className="">sign in</button>
            <button className="">sign up</button>
          </div>

          <form onSubmit={onSubmit}>
            <div>
              <label for="name">Thy username sire:</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                {...register("username")}
              />
            </div>  
            <div>
              <label for="password">Choose a strong password!</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                {...register("password")}
              />
            </div>  
            <div>
              <label for="password-confirm">Now, repeat it!</label>
              <input
                type="password"
                name="password-confirm"
                placeholder="Password"
                {...register("password-confirm")}
              />
            </div>

            <button className="btn solid">Log in!</button>
          </form>

        </div>

        <div className="login-form__or-with">
          <div></div>
          <p>or log in with</p>
          <div></div>
        </div>

        <div className="login-form__alternative">
          <div className="login-form__oauth">
            <button>
              <RiTwitterXLine/>
              <span>Twitter</span>
            </button>
            <button>
              <RiGithubLine/>
              <span>GitHub</span>
            </button>
            <button>
              <RiAppleLine/>
              <span>Apple</span>
            </button>
            <button>
              <RiGoogleFill/>
              <span>Google</span>
            </button>
            <button>
              <RiDiscordFill/>
              <span>Discord</span>
            </button>
            <button>
              <RiTaobaoFill/>
              <span>Taobao</span>
            </button>
          </div>
        </div>


      </div>
    </Modal>
  )
}

export default LoginForm