const getAll = async () => {
  const response = await fetch("/comment", {
    method: "GET",
  })

  const data = await response.json()
  if (data.error) {
    throw new Error(data.error)
  }

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

const getRepliesByParentId = async (id) => {
  const response = await fetch(`/comment/${id}/replies`, {
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

  return data
}

const edit = async (commentId, content) => {
  const body = JSON.stringify({
    id: commentId, content
  })

  const response = await fetch(`/comment`, {
    method: "PUT",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body
  })

  const data = await response.json()
  console.log(data);
  return data
}

const destroy = async (commentId) => {
  const body = JSON.stringify({
    id: commentId
  })

  const response = await fetch("/comment", {
    method: "DELETE",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body
  })

  const data = await response.json()
  console.log(data);
  return data
}


export default {
  getAll,
  getById,
  getRepliesByParentId,
  create,
  edit,
  destroy,
}