import React from 'react'
import Footer from '../components/modules/footer'
import Header from '../components/modules/header'

export default function Main({children}) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}
