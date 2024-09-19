import React, { useState } from 'react'
import logo_md from '../../assets/logo_md.svg'
import { Title } from '../title'
import { Input } from '../form-components/input'
import { Button } from '../button'

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('admin')
  const [password, setPassword] = useState<string>('password')
  const [error, setError] = useState<string>('')

  const handleLogin = (event: any) => {
    event.preventDefault()

    if (username === 'admin' && password === 'password') {
      sessionStorage.setItem('user', JSON.stringify({ username }))
      alert('Login successful!')
      window.location.href = '/editor' // Redirect to the editor
    } else {
      setError('Invalid username or password.')
    }
  }

  const navigateToCreateAccount = () => {
    window.location.href = '/createAccount'
  }

  const navigateToRecoverAccount = () => {
    window.location.href = '/recoverAccount'
  }

  return (
    <div className='lumina_loginPage'>
      <div className='lumina_loginContainer'>
        <Title classnames='lumina_loginTitle' content='Sign in to Lumina' />
        {/* form component */}
        <form onSubmit={handleLogin}>
          <div>
            <div className='lumina_fieldContainer'>
              <label htmlFor='username' className='lumina_loginLabel'>
                Username
              </label>
              <p className='lumina_helpText'>Enter your username</p>
            </div>
            <Input
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
            <Input
              className='lumina_loginInput'
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            style='lumina_loginButton'
            buttonType='button'
            text=' Sign in'
            onClick={handleLogin}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>

        <Button
          style='lumina_loginLinks'
          onClick={navigateToRecoverAccount}
          text='Recover account'
          buttonType='link'
          href='./recoverAccount/index.tsx'
        />
        <Button
          style='lumina_loginLinks'
          onClick={navigateToCreateAccount}
          text='Create account'
          buttonType='link'
          href='./createAccount/index.tsx'
        />
        <img src={logo_md} alt='Lumina Logo' />
      </div>
    </div>
  )
}

export default Login
