import React from 'react'
import Header from './header'
import Footer from './footer'

const layout = ({children}) => {
  return (
    <>
    <Header/>
    <div className='content'>{children}</div>
    <Footer/>
    </>
  )
}

export default layout