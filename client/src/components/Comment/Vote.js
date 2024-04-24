


import classNames from "classnames"
import { CommentContext } from "context/CommentText";
import { useContext } from "react";
import VoteService from "services/VoteService";



const Vote = ({ commentData }) => {
  const [ comments, setComments ] = useContext(CommentContext)

  const {
    upvotes,
    downvotes,
    userVote,
    _id: id,
  } = commentData

  // TODO: CLEAN THIS UP
  const handleVote = async (value) => {
    if (userVote?.value === value) {
      // Remove vote
      const { newComment } = await VoteService.unvote(id)

      console.log(newComment);

      setComments(comments.map((comment) => {
          if (comment._id === newComment._id) {
            return newComment
          }
  
          return comment
        })
      )
      
      return
    }

    // Create new vote
    const { newComment } = await VoteService.vote(id, value)

    console.log(newComment);
    
    setComments(comments.map((comment) => {
        if (comment._id === newComment._id) {
          return newComment
        }

        return comment
      })
    )
  }

  const commentScore = upvotes - downvotes
  const upvoteClasses = classNames("comment__vote-up", {
    "active": userVote?.value > 0,
  })
  const downvoteClasses = classNames("comment__vote-down", {
    "active": userVote?.value < 0,
  })

  return (
    <div className="comment__vote">
      <button
        onClick={() => handleVote(1)}
        className={upvoteClasses}>+</button>

      <p className="comment__vote-count">{ commentScore }</p>

      <button
        onClick={() => handleVote(-1)}
        className={downvoteClasses}>-</button>
    </div>
  )
}

export default Vote