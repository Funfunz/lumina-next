import React, { useState, FormEvent } from 'react'
import logo_md from '../../assets/logo_md.svg'

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('admin')
  const [password, setPassword] = useState<string>('password')
  const [error, setError] = useState<string>('')

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (username === 'admin' && password === 'password') {
      sessionStorage.setItem('user', JSON.stringify({ username }))
      alert('Login successful!')
      window.location.href = '/editor'
    } else {
      setError('Invalid username or password.')
    }
  }

  return (
    <div className='lumina_loginPage'>
      <div className='lumina_loginContainer'>
        <h2 className='lumina_loginTitle'>Sign in to Lumina</h2>
        <form onSubmit={handleLogin}>
          <div>
            <div className='lumina_fieldContainer'>
              <label htmlFor='username' className='lumina_loginLabel'>
                Username
              </label>
              <p className='lumina_helpText'>Enter your username</p>
            </div>
            <input
              className='lumina_loginInput'
              type='text'
              id='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <div className='lumina_fieldContainer'>
              <label className='lumina_loginLabel' htmlFor='password'>
                Password
              </label>
              <p className='lumina_helpText'>Enter your password</p>
            </div>
            <input
              className='lumina_loginInput'
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='lumina_loginButton' type='submit'>
            Sign in
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        <a className='lumina_loginLinks' href='./recoverAccount'>
          Recover account
        </a>
        <a href='./createAccount' className='lumina_loginLinks'>
          Create account
        </a>
        <img src={logo_md} alt='Lumina Logo' />
      </div>
    </div>
  )
}

export default Login
