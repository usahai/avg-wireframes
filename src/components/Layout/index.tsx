import React from 'react'
import HeaderBar from './HeaderBar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderBar />
      <div id='layout-container' className='container mx-auto'>
        {children}
      </div>
    </>
  )
}

export default Layout
