import React from 'react'
import Navigation from './_components/Navigation'
import Logo from './_components/Logo'
import "@/app/_style/globals.css"
import { Josefin_Sans } from 'next/font/google'
import Header from './_components/Header'

export const metadata = {
  title: {
    template: "%s / The Wild Oasis ",
    default: "Welcome / The Wild Oasis "
  }
}

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
})


const RootLayout = ({ children }) => {
  return (
    <html>
      <body className={` ${josefin.className} antialiased text-primary-100 bg-primary-950 flex flex-col`}>
        <Header />
        <div className='flex-1 px-8 py-12'>
          <main className='max-w-7xl mx-auto'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout