const endpoint = "/vote"

const vote = async (commentId, value) => {
  const body = JSON.stringify({
    commentId, value
  })

  const response = await fetch(`${endpoint}`, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body
  })

  const data = await response.json()
  if (data.error) {
    throw new Error(data.error)
  }

  return data
}

const unvote = async (commentId, value) => {
  const body = JSON.stringify({
    commentId
  })

  const response = await fetch(`${endpoint}/unvote`, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body
  })

  const data = await response.json()
  if (data.error) {
    throw new Error(data.error)
  }

  return data
}


export default {
  vote,
  unvote,
}