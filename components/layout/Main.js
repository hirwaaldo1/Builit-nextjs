import React from 'react'
import Footer from '../module/Footer'
import Header from '../module/Header'

export default function Main({children}) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}
