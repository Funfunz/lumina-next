import React, { useState } from 'react'
import logo_md from '../../../assets/logo_md.svg'
import { Title } from '@/components/title/index.js'
import { Input } from '@/components/form-components/input/index.js'
import { Button } from '@/components/button/index.js'

const CreateAccount: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleCreateAccount = (event: any) => {
    event.preventDefault()

    // check to ensure passwords match
    if (password !== repeatPassword) {
      setError('Passwords do not match.')
    } else {
      // Proceed with account creation (backend?)
      alert('Account created successfully!')
    }
  }

  const handleGoBack = () => {
    window.history.back() // Navigates to the login page
  }

  return (
    <div className='lumina_authPage'>
      <div className='lumina_authContainer'>
        <Title classnames='lumina_authTitle' content='Create a Lumina Account' />
        {/* form component */}
        <form onSubmit={handleCreateAccount}>
          <div>
            <label htmlFor='email' className='lumina_authLabel'>
              Email
            </label>
            <p className='lumina_authHelpText'>Enter your email</p>
            <Input
              className='lumina_authInput'
              type='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor='password' className='lumina_authLabel'>
              Password
            </label>
            <p className='lumina_authHelpText'>Enter your password</p>
            <Input
              className='lumina_authInput'
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor='repeatPassword' className='lumina_authLabel'>
              Repeat Password
            </label>
            <p className='lumina_authHelpText'>Re-enter your password</p>
            <Input
              className='lumina_authInput'
              type='password'
              id='repeatPassword'
              value={repeatPassword}
              onChange={e => setRepeatPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Button
            style='lumina_authButton'
            buttonType='button'
            text='Create Account'
            onClick={handleCreateAccount}
          />
        </form>
        <Button style='lumina_authLink' buttonType='button' text='Go back' onClick={handleGoBack} />
        <img src={logo_md} alt='Lumina Logo' />
      </div>
    </div>
  )
}

export default CreateAccount
