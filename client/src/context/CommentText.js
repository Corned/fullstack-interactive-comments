import { createContext, useState } from "react"

const CommentContext = createContext()
const CommentContextProvider = ({ children }) => {
  const [ comments, setComments ] = useState([])

  return (
    <CommentContext.Provider value={[ comments, setComments ]}>
      { children }
    </CommentContext.Provider>
  )
}



export { CommentContext, CommentContextProvider }