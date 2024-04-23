const endpoint = "/auth"

const authenticate = async (setUser) => {
  const response = await fetch(`${endpoint}`, {
    method: "POST",
    credentials: "same-origin",
  })

  const data = await response.json()
  if (data.error) {
    throw new Error(data.error)
  }

  setUser(data.user)
}
const login = async (setUser, username, password) => {
  const response = await fetch(`${endpoint}/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })

  const data = await response.json()
  if (data.error) {
    throw new Error(data.error)
  }

  // Logged in successfully. :D
  console.log(`Login request returned data: ${JSON.stringify(data)}`);
  setUser(data.user)
}

const logout = async (setUser) => {
  await fetch(`${endpoint}/logout`, {
    method: "POST"
  })

  setUser(null)
}

export default { authenticate, login, logout }