import data from "data.json"
import Comment from "components/Comment"
import CommentForm from "components/CommentForm"
import Header from "components/Header"
import Footer from "components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>

      <main>
        {
          data.comments.map((comment) => 
            <Comment
              commentData={comment}
              currentUser={data.currentUser}
            />
          )
        }

        <CommentForm
          buttonLabel="send"
          currentUser={data.currentUser}
        />
      </main>


      <Footer/>
    </div>
  )
}

export default App
