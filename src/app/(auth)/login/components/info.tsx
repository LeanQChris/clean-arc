import React from 'react'
import Image from 'next/image'

export default function LoginInfo() {
  return (
    <div className="relative hidden h-full flex-col hero-gradient p-10 text-white dark:border-r lg:flex">
          <Image
              src="/images/auth/login-bg.png"
              alt="Najikai"
              layout='fill' 
              objectFit='cover'
              className='absolute inset-0 z-[19] bg-center bg-cover'
          />
          <div className="absolute inset-0 " />
          <div className="z-20 flex items-center gap-3 text-lg font-medium">
              <div className='font-bold lexend text-xl'>Admin</div>
          </div>
          <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                  <p className="text-lg font-semibold lexend">
                      &ldquo; Najikai &rdquo;
                  </p>
              </blockquote>
          </div>
      </div>
  )
}
