import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../input'
import { Button } from '@/components/button'

type TProps = {
  email: string
  password: string
}

export const RHFDemo = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<TProps>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<TProps> = async (data: any) => {
    console.log('Form submitted', data)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log(data)
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError('email', {
        message: 'This email is already in use.',
      })
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: 'Please input a valid email',
          }
        })}
        label='Email'
        type='email'
        placeholder='Email'
      />
      {errors.email && <div className='error'>{errors.email.message}</div>}
      <Input
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Minimum 8 characters',
          }
        })}
        label='Password'
        type='password'
        placeholder='Password'
        autoComplete='off'
      />
      {errors.password && <p className='error'>{errors.password.message}</p>}
      <Button
        disabled={isSubmitting}
        buttonType='button'
        type='submit'
        text={isSubmitting ? 'Loading..' : 'Submit'}
      />
    </form>
  )
}
