import './PricingRunner.scss'
import { useNavigate } from 'react-router-dom'
const PricingRunner = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/pricing');
  }
  return (
    <div className="price-runner-container">
        <div className="runner-text">
            <h3>Maestro’s competitive pricing ensures that you always get top-quality tutoring without breaking the bank. We offer both online and in-person tutoring</h3>
            <button onClick={handleSubmit}>View price calculator <img src="/arrow-right-light.png" alt="Right Arrow Icon" /></button>
            <p>*View an estimated price | Subjected to change according to tutor rates*</p>
        </div>
        <div className="runner-img">
            <img src="/calculator-hero.png" alt="Greek statue of man thinking"/>
        </div>
    </div>
  )
}

export default PricingRunner
