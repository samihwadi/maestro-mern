import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './AboutUs.scss'
import PromoRunner from "../../components/runner/PromoRunner";
import SubjectBtn from "../../components/subject/SubjectBtn";
import InfiniteScroll from "../../components/scroller/InfiniteScroll";
import PricingRunner from "../../components/pricing/PricingRunner";
import Reviews from "../../components/reviews/Reviews";
import Pitch from "../../components/pitch/Pitch";

const AboutUs = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const handleSubmit = () => {
        navigate('/book-lesson');
    }
  return (
    <div className='about-us-container'>
        <div className="about-article-wrapper">
            <div className="about-article">
                <h1>Our Story</h1>
                <p>What began as a shared vision between two passionate educators has become a mission to empower learners everywhere. We match dedicated tutors with students ready to grow, dream, and thrive</p>
                <button onClick={handleSubmit} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >Book a lesson 
                    <img  
                    src={isHovered ? "/arrow-right-light.png" : "/arrow-right-dark.png"}  
                    alt="Right Arrow Icon" 
                    />
                </button>
            </div>
            <img src="/about-us-hero.png" alt="Image of stone pillar" />
        </div>
        <PromoRunner />
        <div className="mission-wrapper">
            <div className="mission-img-wrapper"><img src="/mission-hero.png" alt="Illustration of people" /></div>
            <div className="mission-content">
                <h3>Our Mission</h3>
                <p>Whether you're a tutor ready to make an impact or a student unlocking new possibilities, Maestro makes the match simple, reliable, and transformative.</p>
                <p>We are committed to creating learning experiences that are personalized to each student's unique needs and goals.</p>
                <button onClick={handleSubmit} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >Book a lesson 
                    <img  
                    src={isHovered ? "/arrow-right-light.png" : "/arrow-right-dark.png"}  
                    alt="Right Arrow Icon" 
                    />
                </button>
            </div>
        </div>
        <div className="subject-component-wrapper">
            <div className="subject-component-header">
                <h2>Subjects We Offer</h2>
                <p>We offer experienced tutoring across a variety of subjects. Our tutors help students excel in both fundamental concepts and advanced topics, ensuring they are fully equipped for academic success</p>
            </div>
            <SubjectBtn />
        </div>
        <InfiniteScroll />
        <PricingRunner />
        <Reviews />
        <Pitch />
    </div>
  )
}

export default AboutUs
