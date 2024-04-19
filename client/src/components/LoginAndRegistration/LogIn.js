const LoginForm = ({ onSubmit, register }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label for="name">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          {...register("username")}
        />
      </div>  
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>  

      <button type="submit" className="btn solid">Log in!</button>
    </form>
  )
}

export default LoginForm