import Calculator from '../../components/calculator/Calculator'
import Pitch from '../../components/pitch/Pitch'
import PromoRunner from '../../components/runner/PromoRunner'
import Walkthrough from '../../components/walkthrough/Walkthrough'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PricingPage.scss'

const PricingPage = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/book-lesson');
    }
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='pricing-page-container'>
        <div className="pricing-article-wrapper">
            <div className="pricing-article">
                <h1>Quality tutoring that fits your budget</h1>
                <p>Maestro’s competitive pricing ensures that you always get top-quality tutoring without breaking the bank. </p>
                <button onClick={handleSubmit} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >Book a lesson 
                    <img  
                    src={isHovered ? "/arrow-right-light.png" : "/arrow-right-dark.png"}  
                    alt="Right Arrow Icon" 
                    />
                </button>
            </div>
            <img src="/pricing-hero.png" alt="Greek statue of a philosopher" />
        </div>
        <PromoRunner />
        <Calculator />
        <Walkthrough />
        <Pitch />
    </div>
  )
}

export default PricingPage
