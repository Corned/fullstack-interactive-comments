import data from "data.json"
import CommentForm from "components/CommentForm"
import Header from "components/Header"
import Footer from "components/Footer"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "context/UserContext"

import Comment from "components/Comment"

import AuthService from "services/AuthService"
import CommentService from "services/CommentService"

function App() {
  const [ user, setUser ] = useContext(UserContext)
  const [ comments, setComments ] = useState([])

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

  // Load comments
  useEffect(() => {
    const getAllComments = async () => {
      const comments = await CommentService.getAll()
      setComments(comments)
    }

    getAllComments()
  }, [ ])


  console.log(comments);

  return (
    <div className="App">
      <Header/>

      <main>
        {
          comments.map((comment) =>
            // Only render comments without parents
            comment.parent ? <></> :
            <Comment
              commentData={comment}
              currentUser={data.currentUser}
            />
          )
        }

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
