import React, { useState, FormEvent } from 'react'
// import logo from '../../styles/LuminaIcon-v1.3/logo.jpg'
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
      navigate('/editor') // Redirect to editor after login
    } else {
      setError('Invalid username or password.') //redirect to signin?
    }
  }

  return (
    <div className='loginPage'>
      <div className='loginContainer'>
        <h2>Sign in to Lumina</h2>
        <form onSubmit={handleLogin}>
          <div>
            <div className='fieldContainer'>
              <label htmlFor='username'>Username</label>
              <p className='helpText'>Enter your username</p>
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
            <div className='fieldContainer'>
              <label htmlFor='password'>Password</label>
              <p className='helpText'>Enter your password</p>
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
        {/* <img src={logo} alt='Lumina Logo' /> */}
      </div>
    </div>
  )
}

export default Login
