import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Walkthrough.scss'

type Instructions = {
    caption: string,
    text: string,
    icon_url: string,
}

const instructions: Instructions[] = [
    {caption: "Book an appointment", text: "Fill out the appointment form", icon_url: "/icons/booking-icon.png"},
    {caption: "Consult with a representative", text: "Consult over Zoom call or email to schedule first lesson", icon_url: "/icons/consult-icon.png"},
    {caption: "Join your first lesson", text: "Your first lesson is free to help you decide", icon_url: "/icons/join-lesson-icon.png"},
    {caption: "Register with Maestro", text: "Register if you think Maestro can help you", icon_url: "/icons/register-icon.png"},
]

const Walkthrough = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/book-lesson');
    }
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='walkthrough-container'>
        <div className="img-wrapper"><img src="/walkthrough.jpeg" alt="Confused Student" /></div>
        <div className="text-wrapper">
            <h2>How to book a tutor</h2>
            <p className="text-runner">There is no “one size fits all” in education. However, finding a tutor has never been easier and we at <strong>Maestro</strong> are here to help.</p>
            <div className="icon-card-container">
                {instructions.map((instruction, index) => (
                    <div className="walkthrough-card" key={index}>
                        <p className="icon-list">{index + 1}</p>
                        <img src={instruction.icon_url} alt={`Icon ${index}`} />
                        <div className="">
                            <h3>{instruction.caption}</h3>
                            <p>{instruction.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >Book a lesson 
                <img  
                src={isHovered ? "/arrow-right-light.png" : "/arrow-right-dark.png"}  
                alt="Right Arrow Icon" 
                />
            </button>
        </div>
    </div>
  )
}

export default Walkthrough
