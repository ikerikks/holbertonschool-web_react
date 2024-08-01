import './Login.css';

export default function Login() {
  return (
    <>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" name="mail" id="email" value="" readOnly/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" value="" readOnly/>
        <button type="reset">OK</button>
      </form>
    </>
  );
}