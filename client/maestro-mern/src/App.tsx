import './App.scss'
import Footer from './components/footer/Footer'
import Landing from './components/landing-page/Landing'
import Navbar from './components/navigation/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Services from './containers/services/Services'
import PricingPage from './containers/pricing/PricingPage'
import axios from 'axios'
import ScrollToTop from './components/ScrollToTop'

axios.defaults.baseURL = 'http://localhost:4000/api'


const App = () => {


  return (
    <div className='App'>
        <Router>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/pricing' element={<PricingPage />}></Route>
          </Routes>
          <Footer />
        </Router>
    </div>
  )
}

export default App
