import React, { useState, FormEvent } from 'react'
import logo_md from '../../assets/logo_md.svg'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('admin')
  const [password, setPassword] = useState<string>('password')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (username === 'admin' && password === 'password') {
      sessionStorage.setItem('user', JSON.stringify({ username }))
      alert('Login successful!')
      navigate('/editor')
    } else {
      setError('Invalid username or password.')
    }
  }

  return (
    <div className='loginPage'>
      <div className='loginContainer'>
        <h2 className='loginTitle'>Sign in to Lumina</h2>
        <form onSubmit={handleLogin}>
          <div>
            <div className='fieldContainer'>
              <label htmlFor='username' className='loginLabel'>
                Username
              </label>
              <p className='helpText'>Enter your username</p>
            </div>
            <input
              className='loginInput'
              type='text'
              id='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <div className='fieldContainer'>
              <label className='loginLabel' htmlFor='password'>
                Password
              </label>
              <p className='helpText'>Enter your password</p>
            </div>
            <input
              className='loginInput'
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='loginButton' type='submit'>
            Sign in
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        <a className='link' href='./recoverAccount'>
          Recover account
        </a>
        <a href='./createAccount' className='link'>
          Create account
        </a>
        <img src={logo_md} alt='Lumina Logo' />
      </div>
    </div>
  )
}

export default Login
