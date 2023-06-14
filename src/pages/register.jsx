import React from 'react'
import Register from '../components/organism/Register'
import Header from '../components/molecules/Header'
import Footer from '../components/molecules/Footer'
import AuthLayout from '../components/template/AuthLayout'

export default function register() {
  return (
    <>
        <Header />
        <div className="flex flex-col items-center">
            <div className="flex flex-row w-full">
                <div className="w-1/2">
                    <img src="/public/images/reg.png" alt="" className="h-full object-cover" />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <AuthLayout title="register" type='register'>
                        <Register />
                    </AuthLayout>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
