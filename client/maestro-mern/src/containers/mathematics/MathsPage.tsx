import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './MathsPage.scss'
import PromoRunner from '../../components/runner/PromoRunner';
import Expandable from '../../components/expandable/Expandable';
import MethodCards from '../../components/methods/MethodCards';
import PricingRunner from '../../components/pricing/PricingRunner';
import Reviews from '../../components/reviews/Reviews';
import Walkthrough from '../../components/walkthrough/Walkthrough';
import Pitch from '../../components/pitch/Pitch';

const MathsPage = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const handleSubmit = () => {
        navigate('/book-lesson');
    }
  return (
    <div className='math-page-container'>
        <div className="math-article-container">
            <div className="math-article">
                <h1>Mathematics</h1>
                <h3>In home tutoring | Online tutoring</h3>
                <p>High school math can be tough, especially when students start tackling things like algebra, geometry, or data management. It’s easy to fall behind if they miss even a few key concepts. That’s where a private tutor makes all the difference. Our tutors work one-on-one with students to explain things clearly, help them catch up, and build their confidence. Whether your teen is preparing for a big test or just needs regular support, tutoring gives them the tools they need to succeed and maybe even enjoy math a little more!</p>
                <button onClick={handleSubmit} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >Book a lesson 
                    <img  
                    src={isHovered ? "/arrow-right-light.png" : "/arrow-right-dark.png"}  
                    alt="Right Arrow Icon" 
                    />
                </button>
            </div>
            <div className="math-img-wrapper">
                <img src="/icons/maths-page-icon.png" alt="Maths Icon" />
            </div>
        </div>
        <PromoRunner />
        <Expandable />
        <MethodCards />
        <PricingRunner />
        <Reviews />
        <Walkthrough />
        <Pitch />
    </div>
  )
}

export default MathsPage
