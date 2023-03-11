import React from 'react'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import 'normalize.css'
import Layout from './components/Layout/Layout.jsx'
import Banner from './components/Banner/Banner.jsx'
import About from './components/About/About.jsx'
import Product from './components/Product/Product.jsx'

const App = () => {
  return (
    <>
      <Layout>
        <Header />
        <main>
          <Banner />
          <About />
          <Product />
        </main>
      </Layout>
      <Footer />
    </>
  )
}

export default App
