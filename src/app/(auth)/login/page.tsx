import React from 'react'
import LoginForm from './components/form'
import LoginInfo from './components/info'

export default function LoginPage() {
    return (
        <div className="container relative  h-screen  flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <LoginInfo />
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-2xl font-semibold tracking-tight text-white text-center">
                            Sign In
                        </h1>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
