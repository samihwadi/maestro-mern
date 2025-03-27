import { useState } from 'react';
import './Landing.scss'

const Landing = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className='landing-container'>
        <h1>ELEVATED LEARNING THROUGH MAESTRO</h1>
        <h3>In-home | Online Tutoring</h3>
        <p>Smart learning, made easy! Affordable rates, flexible schedules, and tutors who truly care—we keep learning stress-free and effective. Let's grow together!</p>
        <img
            src={isHover ? '/icons/biology-icon-hover.svg' : '/icons/biology-icon-1.svg'}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        />
    </div>
  )
}

export default Landing
