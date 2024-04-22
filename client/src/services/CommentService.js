const getAll = async () => {
  const response = await fetch("/comment", {
    method: "GET",
  })

  const data = await response.json()
  if (data.error) {
    throw new Error(data.error)
  }

  console.log(data);

  return data
}

const getById = async (id) => {
  const response = await fetch(`/comment/{id}`, {
    method: "GET",
  })

  const data = await response.json()
  if (data.error) {
    throw new Error(data.error)
  }

  return data
}

const create = async (content, parentId = null) => {
  const body = JSON.stringify({
    content,
    parentId
  })

  console.log(body);

  const response = await fetch(`/comment`, {
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

  return data.comments
}


export default { getAll, getById, create }