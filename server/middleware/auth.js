import jwt from "jsonwebtoken"

const isAuthenticated = (req, res, next) => {
  const { auth } = req.cookies

  if (!auth) {
    return next()
  }

  const [ _, token ] = auth.split(" ")
  const decoded = jwt.verify(token, process.env.SECRET_KEY)

  req.userId = decoded.id

  next()
}

export default isAuthenticated