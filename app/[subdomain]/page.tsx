export default function Login() {
  return (
    <div className="login__container">
      <form action="" className="login__container__form">
        <h1 className="login__container__form__heading">
          Login to your account
        </h1>
        <p className="login__container__form__info">
          Enter your email and password to login
        </p>
        <div className="login__container__form__input">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="login__container__form__input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button className="login__container__form__button">Login</button>
      </form>
    </div>
  );
}
