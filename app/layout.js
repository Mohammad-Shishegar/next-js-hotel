import React from 'react'
import Navigation from './_components/Navigation'
import Logo from './_components/Logo'

export const metadata = {
  title: "the wild oasis "
}

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>
          {children}
        </main>
        <footer>
          copy right from oasis compapany
        </footer>
      </body>
    </html>
  )
}

export default RootLayout