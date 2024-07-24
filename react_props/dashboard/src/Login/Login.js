import './Login.css';

export function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form>
        <div className='email-form'>
          <label htmlFor='email'>Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className='password-form'>
          <label htmlFor="passwd">Password:</label>
          <input type="password" name="passwd" id="passwd" />
        </div>
        <button type="button">OK</button>
      </form>
    </>
  );
}