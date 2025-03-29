import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Pitch.scss'

type Convince = {
    caption: string,
    text: string,
    icon_url: string,
}

const convinceContent: Convince[] = [
    {caption: "We provide the most affordable rates", text: "Top-notch tutoring at a price you can afford.", icon_url: "/icons/dollar-icon.png"},
    {caption: "Option for class rescheduling", text: "Easily reschedule your classes to fit your schedule.", icon_url: "/icons/calendar-icon.png"},
    {caption: "Parents-teacher meetings", text: "Stay updated with regular parent-teacher meetings.", icon_url: "/icons/meeting-icon.png"},
    {caption: "Cancel anytime", text: "Cancel with a two week notice.", icon_url: "/icons/cancel-icon.png"},
]

const Pitch = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleSubmit = () => {
        navigate('/contact-us');
    }
  return (
    <div className='pitch-container'>
        <div className="pitch-content-wrapper">
            <div className="pitch-content">
                <div className="icon-card-container">
                <h2>Why Choose Maestro?</h2>
                    {convinceContent.map((content) => (
                        <div className="icon-card">
                            <img src={content.icon_url} alt="Icons" /> 
                            <div className="card-content">
                                <h3>{content.caption}</h3>
                                <p>{content.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleSubmit} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >Contact Us  
                    <img  
                    src={isHovered ? "/arrow-right-light.png" : "/arrow-right-dark.png"}  
                    alt="Right Arrow Icon" 
                    />
                </button>
            </div>
            <div className="image-wrapper"><img src="/pitch-hero.png" alt="Teacher and Students"/></div>
        </div>
        <div className="runner-text">
            <p>At Maestro, excellence in tutoring isn’t just a promise — it’s our standard</p>
        </div>
    </div>
  )
}

export default Pitch
