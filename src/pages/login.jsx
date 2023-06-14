import React from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Login from '../components/organism/Login'
import Footer from '../components/molecules/Footer'
import Header from '../components/molecules/Header'

export default function login() {
  return (
    <>
        <Header />
        <div className="flex flex-col items-center">
            <div className="flex flex-row w-full">
                <div className="w-1/2">
                    <img src="/public/images/log.png" alt="" className="h-full object-cover" />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <AuthLayout title="login" type='login'>
                        <Login />
                    </AuthLayout>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
