import './Navbar.scss';
import logo from "/FullLogo-flat.png";
import { NavLink, useNavigate } from 'react-router-dom'; 

const Navbar = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/book-lesson')
    }
  return (
    <div className='nav-container'>
        <NavLink to="/"><img src={logo} alt="Maestro Logo" /></NavLink>
        <div className="navlinks-wrapper">
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink>
            <NavLink to="/subjects" className={({ isActive }) => (isActive ? 'active' : '')}>Subjects</NavLink>
            <NavLink to="/pricing" className={({ isActive }) => (isActive ? 'active' : '')}>Pricing</NavLink>
            <NavLink to="/tutors" className={({ isActive }) => (isActive ? 'active' : '')}>Our Tutors</NavLink>
            <NavLink to="/careers" className={({ isActive }) => (isActive ? 'active' : '')}>Careers</NavLink>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
            <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
            <button onClick={handleSubmit}>Book an appointment</button>
        </div>
    </div>
  )
}

export default Navbar
