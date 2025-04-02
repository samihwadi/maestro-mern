import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import './Services.scss'
import PromoRunner from "../../components/runner/PromoRunner";
import Walkthrough from "../../components/walkthrough/Walkthrough";
import PricingRunner from "../../components/pricing/PricingRunner";
import InfiniteScroll from "../../components/scroller/InfiniteScroll";
import Pitch from "../../components/pitch/Pitch";
import Expandable from "../../components/expandable/Expandable";
import MethodCards from "../../components/methods/MethodCards";
const Services = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/book-lesson');
    }
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="services-container">
        <div className="services-article">
            <div className="services-text-wrapper">
                <h1>Find the perfect tutor, every time</h1>
                <h3>Maestro offers in-home & online tutoring services for all students, high school and onwards.</h3>
                <p>We offer experienced tutoring across a variety of subjects, including core subjects such as 
                    <Link to="/mathematics"> Mathematics</Link>, <Link to="/physics">Physics</Link>, <Link to="/chemistry">Chemistry</Link> and <Link to="/biology">Biology</Link>, helping students excel in both fundamentals and advanced topics.
                </p>
                <button onClick={handleSubmit} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >Book a lesson 
                    <img  
                    src={isHovered ? "/arrow-right-light.png" : "/arrow-right-dark.png"}  
                    alt="Right Arrow Icon" 
                    />
                </button>
            </div>
            <div className="services-img-wrapper">
                <img src="/services-hero.png" alt="Statue of a greek man" />
            </div>
        </div>
        <PromoRunner />
        <MethodCards />
        <Expandable />
        <Walkthrough />
        <PricingRunner />
        <InfiniteScroll />
        <Pitch />
    </div>
  )
}

export default Services
