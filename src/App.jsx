import React from 'react'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import 'normalize.css'
import Layout from './components/Layout/Layout.jsx'
import Banner from './components/Banner/Banner.jsx'

const App = () => {
  return (
    <>
      <Layout>
        <Header />
        <main>
          <Banner />
        </main>
        {/* <Footer /> */}
      </Layout>
    </>
  )
}

export default App
