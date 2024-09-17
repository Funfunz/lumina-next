import React, { useState, FormEvent } from 'react'
import styles from './createAccount.module.scss'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

const CreateAccount: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleCreateAccount = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // check to ensure passwords match
    if (password !== repeatPassword) {
      setError('Passwords do not match.')
    } else {
      // Proceed with account creation (backend?)
      alert('Account created successfully!')
    }
  }

  return (
    <div className={styles.createPage}>
      <div className={styles.createContainer}>
        <h2>Create a Lumina Account</h2>
        <form onSubmit={handleCreateAccount}>
          <div className={styles.fieldContainer}>
            <label htmlFor='email'>Email</label>
            <p className={styles.helpText}>Enter your email</p>
            <input
              type='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.fieldContainer}>
            <label htmlFor='password'>Password</label>
            <p className={styles.helpText}>Enter your password</p>
            <input
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.fieldContainer}>
            <label htmlFor='repeatPassword'>Repeat Password</label>
            <p className={styles.helpText}>Re-enter your password</p>
            <input
              type='password'
              id='repeatPassword'
              value={repeatPassword}
              onChange={e => setRepeatPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type='submit'>Create Account</button>
        </form>

        <Link to='/login' className={styles.backLink}>
          Go back
        </Link>
        <img src={logo} alt='Lumina Logo' />
      </div>
    </div>
  )
}

export default CreateAccount
