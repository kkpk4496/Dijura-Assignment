import {useState} from 'react'
import './index.css'

const Login = props => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeName = event => setName(event.target.value)
  const onChangeEmail = event => setEmail(event.target.value)
  const onChangePassword = event => setPassword(event.target.value)

  const submitForm = event => {
    const {history} = props
    event.preventDefault()
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    history.replace('/')
  }

  return (
    <div className="login-form-container">
      <h1 className="head">Login / SignUp</h1>
      <form className="input-container" onSubmit={submitForm}>
        <label htmlFor="name" className="input-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          value={name}
          required
          onChange={onChangeName}
          className="input-field"
        />
        <br />
        <label htmlFor="email" className="input-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          value={email}
          required
          onChange={onChangeEmail}
          className="input-field"
        />
        <br />
        <label htmlFor="pswd" className="input-label">
          Password
        </label>
        <input
          type="password"
          id="pswd"
          placeholder="Enter Password"
          value={password}
          required
          onChange={onChangePassword}
          className="input-field"
        />

        <div className="btn-container">
          <button type="submit" className="login-button">
            Login
          </button>
          <button type="submit" className="login-button signup-button">
            SignUp
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
