import './PricingRunner.scss'
const PricingRunner = () => {
  return (
    <div className="price-runner-container">
        <div className="runner-text">
            <h3>Maestro’s competitive pricing ensures that you always get top-quality tutoring without breaking the bank. We offer both online and in-person tutoring</h3>
            <button>View price calculator <img src="/arrow-right-light.png" alt="Right Arrow Icon" /></button>
            <p>*View an estimated price | Subjected to change according to tutor r`tes*</p>
        </div>
        <div className="runner-img">
            <img src="/calculator-hero.png" alt="Greek statue of man thinking" />
        </div>
    </div>
  )
}

export default PricingRunner
