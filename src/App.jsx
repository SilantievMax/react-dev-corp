import React from 'react'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import 'normalize.css'
import Layout from './components/Layout/Layout.jsx'

const App = () => {
  return (
    <>
      <Layout>
        <Header />
        <main></main>
        {/* <Footer /> */}
      </Layout>
    </>
  )
}

export default App
