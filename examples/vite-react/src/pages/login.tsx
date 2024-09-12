import React, { useState, FormEvent } from 'react'
import styles from './login.module.scss'
import logo from '../assets/logo.jpg'

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Simple authentication check
    if (username === 'admin' && password === 'password') {
      // Simulation of logging in with session storage
      sessionStorage.setItem('user', JSON.stringify({ username }))
      alert('Login successful!') // redirect to editor
    } else {
      setError('Invalid username or password.') //redirect to signIn ?
    }
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h2>Sign in to Lumina</h2>
        <form onSubmit={handleLogin}>
          <div>
            <div className={styles.fieldContainer}>
              <label htmlFor='username'>Username</label>
              <p className={styles.helpText}>Enter your username</p>
            </div>
            <input
              type='text'
              id='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <div className={styles.fieldContainer}>
              <label htmlFor='password'>Password</label>
              <p className={styles.helpText}>Enter your password</p>
            </div>
            <input
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit'>Sign in</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        <a href='./recoverAccount'>Recover account</a>
        <a href='./createAccount'>Create account</a>
        <img src={logo} alt='Lumina Logo' />
      </div>
    </div>
  )
}

export default Login
