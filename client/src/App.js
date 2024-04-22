import data from "data.json"
import CommentForm from "components/CommentForm"
import Header from "components/Header"
import Footer from "components/Footer"
import { useContext, useEffect } from "react"
import { UserContext } from "context/UserContext"

import Comment from "components/Comment"

import AuthService from "services/AuthService"

function App() {
  const [ user, setUser ] = useContext(UserContext)

  // Check for login
  useEffect(() => {
    const auth = async () => {
      try {
        await AuthService.authenticate(setUser)
      } catch (err) {
        console.log(err.message)
      }
    }

    auth()
  }, [ ])


  return (
    <div className="App">
      <Header/>

      <main>
{/*         {
          data.comments.map((comment) => 
            <Comment
              commentData={comment}
              currentUser={data.currentUser}
            />
          )
        } */}

        { user && (
          <CommentForm
            buttonLabel="send"
            currentUser={data.currentUser}
          />
        )}
      </main>


      <Footer/>
    </div>
  )
}

export default App
