import './App.scss'
import Footer from './components/footer/Footer'
import Landing from './components/landing-page/Landing'
import Navbar from './components/navigation/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Services from './containers/services/Services'


const App = () => {


  return (
    <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/services' element={<Services />}></Route>
          </Routes>
          <Footer />
        </Router>
    </div>
  )
}

export default App
