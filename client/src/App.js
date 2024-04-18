




import data from "data.json"
import Comment from "components/Comment"
import CommentForm from "components/CommentForm"
import Modal from "components/Modal"
import Header from "components/Header"
import Footer from "components/Footer"

function App() {
  return (
    <div className="App">

      <Header/>

{/*       <Modal>
        <h1>Delete comment</h1>
        <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div>
          <button className="btn solid muted">NO, CANCEL</button>
          <button className="btn solid warning">YES, DELETE</button>
        </div>
      </Modal> */}

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
