import { Link, useNavigate } from "react-router-dom"
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import './Footer.scss'

const Footer = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/book-lesson');
    }
  return (
    <footer>
        <div className="runner-design"></div>
        <div className="footer-content-wrapper">
            <h1>FOR LEARNERS WHO WANTS RESULTS, FAST</h1>
            <button onClick={handleSubmit}>Book a lesson <img src="/arrow-right-light.png" alt="Right Arrow Icon" /></button>
            <div className="links-container">
                <ul>
                    <li><strong>Subjects</strong></li>
                    <li><Link to='/mathematics'>Mathematics</Link></li>
                    <li><Link to='/physics'>Physics</Link></li>
                    <li><Link to='/chemistry'>Chemistry</Link></li>
                    <li><Link to='/biology'>Biology</Link></li>
                </ul>
                <ul>
                    <li><strong>Services</strong></li>
                    <li><Link to='/services'>Tutoring Services</Link></li>
                    <li><Link to='/careers'>Tutoring Careers</Link></li>
                </ul>
                <ul>
                    <li><strong>Information</strong></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                    <li><Link to='/tutors'>Our Tutors</Link></li>
                    <li><Link to='/about-us'>About Us</Link></li>
                    <li><Link to='/contact-us'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="logo-content-wrapper">
                <Link to='/'><img src="/Maestro-logo-white.png" alt="Maestro Logo" /></Link> 
                <div className="socials-container">
                    <a href='https://www.instagram.com/official_thisismaestro/' target='blank'><FaInstagram /></a>
                    <a href='https://www.facebook.com/profile.php?id=61567133600300' target='blank'><FaFacebook /></a>
                    <a href='https://www.linkedin.com/company/this-is-maestro/about/'><FaLinkedin target='blank'/></a>
                </div>
            </div>
        </div>
        <div className="license">
            <p>© {new Date().getFullYear()} Maestro. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
