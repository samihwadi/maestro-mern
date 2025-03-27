import './App.scss'
import Landing from './components/landing-page/Landing'
import Navbar from './components/navigation/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () => {


  return (
    <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />}></Route>
          </Routes>
        </Router>
    </div>
  )
}

export default App
