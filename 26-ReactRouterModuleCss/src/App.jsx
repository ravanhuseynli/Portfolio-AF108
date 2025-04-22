import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './pages/Header'
import Center from './pages/Center'
import Main from './pages/Main'
import Payment from './pages/Payment'
import Testimonial from './pages/Testimonial'
import Contact  from './pages/Contact';
import Footer from './pages/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Center />
      <Main />
      <Payment />
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
