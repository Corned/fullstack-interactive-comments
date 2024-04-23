import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { UserContextProvider } from "context/UserContext"
import { CommentContextProvider } from "context/CommentText"

import "./styles/index.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CommentContextProvider>
        <App />
      </CommentContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)
