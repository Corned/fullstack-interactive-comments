import data from "data.json"
import CommentForm from "components/CommentForm"
import Header from "components/Header"
import Footer from "components/Footer"
import { useContext } from "react"
import { UserContext } from "context/UserContext"

import Comment from "components/Comment"

function App() {
  const [ user ] = useContext(UserContext)

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
