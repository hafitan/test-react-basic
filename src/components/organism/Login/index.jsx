import React from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'

export default function Login(props) {
  return (
    <form action="">
        <InputForm label='email' type='email' name='email' placeholder='Masukkan email'></InputForm>
        <InputForm label='password' type='password' name='password' placeholder='Masukkan password'></InputForm>
        <Button color='bg-blue-500'>Login</Button>
    </form>
  )
}
