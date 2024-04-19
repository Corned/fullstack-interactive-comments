const SignUpForm = ({ onSubmit, register }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label for="name">Thy username sire:</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          {...register("username")}
        />
      </div>  
      <div>
        <label for="password">Choose a strong password!</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>  
      <div>
        <label for="password-confirm">Now, repeat it!</label>
        <input
          type="password"
          name="password-confirm"
          placeholder="Password"
          {...register("password-confirm")}
        />
      </div>

      <button className="btn solid">Sign up!</button>
    </form>
  )
}

export default SignUpForm