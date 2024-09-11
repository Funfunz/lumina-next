import React, { useState, FormEvent } from 'react'

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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>recover account link</p>
      <p>create account link</p>
    </div>
  )
}

export default Login
