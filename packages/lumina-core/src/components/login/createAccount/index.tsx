import React, { useState, FormEvent } from 'react'
import logo_md from '../../assets/logo_md.svg'
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
    <div className='createPage'>
      <div className='createContainer'>
        <h2 className='createTitle'>Create a Lumina Account</h2>
        <form onSubmit={handleCreateAccount}>
          <div className='fieldContainer'>
            <label htmlFor='email' className='createLabel'>
              Email
            </label>
            <p className='helpText'>Enter your email</p>
            <input
              className='createInput'
              type='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='fieldContainer'>
            <label htmlFor='password' className='createLabel'>
              Password
            </label>
            <p className='helpText'>Enter your password</p>
            <input
              className='createInput'
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <div className='fieldContainer'>
            <label htmlFor='repeatPassword' className='createLabel'>
              Repeat Password
            </label>
            <p className='helpText'>Re-enter your password</p>
            <input
              className='createInput'
              type='password'
              id='repeatPassword'
              value={repeatPassword}
              onChange={e => setRepeatPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button className='createButton' type='submit'>
            Create Account
          </button>
        </form>

        <Link to='/login' className='backLink'>
          Go back
        </Link>
        <img src={logo_md} alt='Lumina Logo' />
      </div>
    </div>
  )
}

export default CreateAccount
