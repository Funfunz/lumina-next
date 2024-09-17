import React, { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import styles from './recoverAccount.module.scss'
import logo from '../assets/logo.jpg'

const RecoverAccount: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleRecover = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Simple email validation check - includes @
    if (email.includes('@')) {
      // Simulation of recovery process
      setMessage('Recovery email sent! Please check your inbox.')
    } else {
      setMessage('Please enter a valid email address.')
    }
  }

  return (
    <div className={styles.recoverPage}>
      <div className={styles.recoverContainer}>
        <h2>Recover your account</h2>
        <form onSubmit={handleRecover}>
          <div>
            <div className={styles.fieldContainer}>
              <label htmlFor='email'>Email</label>
              <p className={styles.helpText}>Enter your email to recover your password</p>
            </div>
            <input
              type='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <button type='submit'>Recover Password</button>
          {message && <p style={{ color: 'green' }}>{message}</p>}
        </form>

        <Link to='/login' className={styles.backLink}>
          Go back
        </Link>
        <img src={logo} alt='Lumina Logo' />
      </div>
    </div>
  )
}

export default RecoverAccount
