import React from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'

export default function Register(props) {
  return (
    <form action="">
        <InputForm label='username' name='username' type='text' placeholder='Masukkan username'></InputForm>
        <InputForm label='email' type='email' name='email' placeholder='Masukkan email'></InputForm>
        <InputForm label='password' type='password' name='password' placeholder='Masukkan password'></InputForm>
        <Button color='bg-blue-500'>Register</Button>
    </form>
  )
}
