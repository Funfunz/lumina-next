import React, { useState, FormEvent } from 'react'
import logo_md from '../../../assets/logo_md.svg'
import { Link } from 'react-router-dom'

const RecoverAccount: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleRecover = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (email.includes('@')) {
      // Simulation of recovery process
      setMessage('Recovery email sent! Please check your inbox.')
    } else {
      setMessage('Please enter a valid email address.')
    }
  }

  return (
    <div className='recoverPage'>
      <div className='recoverContainer'>
        <h2 className='recoverTitle'>Recover your account</h2>
        <form onSubmit={handleRecover}>
          <div>
            <div className='fieldContainer'>
              <label htmlFor='email' className='recoverLabel'>
                Email
              </label>
              <p className='helpText'>Enter your email to recover your password</p>
            </div>
            <input
              className='recoverInput'
              type='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <button className='recoverButton' type='submit'>
            Recover Password
          </button>
          {message && <p style={{ color: 'green' }}>{message}</p>}
        </form>

        <Link to='/login' className='backLink'>
          Go back
        </Link>
        <img src={logo_md} alt='Lumina Logo' />
      </div>
    </div>
  )
}

export default RecoverAccount
