import React, { useState } from 'react'
import logo_md from '../../../assets/logo_md.svg'
import { Title } from '@/components/title'
import { Input } from '@/components/form-components/input'
import { Button } from '@/components/button'

const RecoverAccount: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleRecover = (event: any) => {
    event.preventDefault()

    if (email.includes('@')) {
      // Simulation of recovery process
      setMessage('Recovery email sent! Please check your inbox.')
    } else {
      setMessage('Please enter a valid email address.')
    }
  }

  const handleGoBack = () => {
    window.history.back() // Navigates to the login page
  }

  return (
    <div className='lumina_authPage'>
      <div className='lumina_authContainer'>
        <Title classnames='lumina_authTitle' content='Recover your account' />
        {/* form component */}
        <form onSubmit={handleRecover}>
          <div>
            <div>
              <label htmlFor='email' className='lumina_authLabel'>
                Email
              </label>
              <p className='lumina_authHelpText'>Enter your email to recover your password</p>
            </div>
            <Input
              className='lumina_authInput'
              type='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <Button
            style='lumina_authButton'
            buttonType='button'
            text=' Recover Password'
            onClick={handleRecover}
          />

          {message && <p style={{ color: 'green' }}>{message}</p>}
        </form>
        <Button
          style='lumina_authLink'
          buttonType='button'
          text=' Go back'
          onClick={handleGoBack}
        />

        <img src={logo_md} alt='Lumina Logo' />
      </div>
    </div>
  )
}

export default RecoverAccount
