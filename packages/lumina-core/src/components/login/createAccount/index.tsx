import React, { useState } from 'react'
import logo_md from '../../../assets/logo_md.svg'
import { Title } from '@/components/title'
import { Input } from '@/components/form-components/input'
import { Button } from '@/components/button'

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
    window.location.href = '/login'
  }

  return (
    <div className='lumina_createPage'>
      <div className='lumina_createContainer'>
        <Title classnames='lumina_createTitle' content='Create a Lumina Account' />
        {/* form component */}
        <form onSubmit={handleCreateAccount}>
          <div className='lumina_fieldContainer'>
            <label htmlFor='email' className='lumina_createLabel'>
              Email
            </label>
            <p className='lumina_helpText'>Enter your email</p>
            <Input
              className='lumina_createInput'
              type='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='lumina_fieldContainer'>
            <label htmlFor='password' className='lumina_createLabel'>
              Password
            </label>
            <p className='lumina_helpText'>Enter your password</p>
            <Input
              className='lumina_createInput'
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <div className='lumina_fieldContainer'>
            <label htmlFor='repeatPassword' className='lumina_createLabel'>
              Repeat Password
            </label>
            <p className='lumina_helpText'>Re-enter your password</p>
            <Input
              className='lumina_createInput'
              type='password'
              id='repeatPassword'
              value={repeatPassword}
              onChange={e => setRepeatPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Button
            style='lumina_createButton'
            buttonType='button'
            text='Create Account'
            onClick={handleCreateAccount}
          />
        </form>
        <Button style='lumina_backLink' buttonType='button' text='Go back' onClick={handleGoBack} />
        <img src={logo_md} alt='Lumina Logo' />
      </div>
    </div>
  )
}

export default CreateAccount
