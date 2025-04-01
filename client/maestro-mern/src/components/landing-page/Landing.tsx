import Pitch from '../pitch/Pitch';
import PricingRunner from '../pricing/PricingRunner';
import Reviews from '../reviews/Reviews';
import PromoRunner from '../runner/PromoRunner';
import InfiniteScroll from '../scroller/InfiniteScroll';
import SubjectBtn from '../subject/SubjectBtn';
import Walkthrough from '../walkthrough/Walkthrough';
import './Landing.scss'
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/book-lesson')
    }
  return (
    <div className='landing-container'>
      <div className="hero-wrapper">
        <img className='image-one' src="landing-hero-1.png" alt="Greek Statue Image" />
        <img className='image-two' src="landing-hero-2.png" alt="Greek Statue Image" />
        <div className="hero-text-wrapper">
            <h1>ELEVATED LEARNING THROUGH MAESTRO</h1>
            <h3>In-home  |  Online Tutoring</h3>
            <p className='text-intro'>Smart learning, made easy! Affordable rates, flexible schedules, and tutors who truly care—we keep learning stress-free and effective. Let's grow together!</p>
            <button onClick={handleSubmit}>Book a lesson</button>
        </div>
      </div>
      <PromoRunner />
      <SubjectBtn />
      <Walkthrough />
      <InfiniteScroll />
      <PricingRunner />
      <Reviews />
      <Pitch />
    </div>
  )
}

export default Landing
