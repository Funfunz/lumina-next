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
      window.location.pathname = '/' // Redirect to the editor
    } else {
      setError('Invalid username or password.')
    }
  }

  const navigateToCreateAccount = () => {
    window.location.pathname = '/createAccount'
  }

  const navigateToRecoverAccount = () => {
    window.location.pathname = '/recoverAccount'
  }

  return (
    <div className='lumina_authPage'>
      <div className='lumina_authContainer'>
        <Title classnames='lumina_authTitle' content='Sign in to Lumina' />
        {/* form component */}
        <form onSubmit={handleLogin}>
          <div>
            <div>
              <label htmlFor='username' className='lumina_authLabel'>
                Username
              </label>
              <p className='lumina_authHelpText'>Enter your username</p>
            </div>
            <Input
              className='lumina_authInput'
              type='text'
              id='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <div>
              <label className='lumina_authLabel' htmlFor='password'>
                Password
              </label>
              <p className='lumina_authHelpText'>Enter your password</p>
            </div>
            <Input
              className='lumina_authInput'
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            style='lumina_authButton'
            buttonType='button'
            text=' Sign in'
            onClick={handleLogin}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>

        <Button
          style='lumina_authLink'
          onClick={navigateToRecoverAccount}
          text='Recover account'
          buttonType='link'
          href='./recoverAccount?editor=true'
        />
        <Button
          style='lumina_authLink'
          onClick={navigateToCreateAccount}
          text='Create account'
          buttonType='link'
          href='/createAccount?editor=true'
        />
        <img src={logo_md} alt='Lumina Logo' />
      </div>
    </div>
  )
}

export default Login
