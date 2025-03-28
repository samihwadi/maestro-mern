import './Navbar.scss';
import { useState, useEffect, useRef } from 'react';
import logo from "/FullLogo-flat.png";
import { NavLink, useNavigate } from 'react-router-dom'; 

const subjects = [
  { name: "Mathematics", route: "/mathematics", icon: "/icons/nav-math-icon.png" },
  { name: "Physics", route: "/physics", icon: "/icons/nav-physics-icon.png" },
  { name: "Chemistry", route: "/chemistry", icon: "/icons/nav-chem-icon.png" },
  { name: "Biology", route: "/biology", icon: "/icons/nav-biology-icon.png" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleSubmit = () => {
    navigate('/book-lesson');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='nav-container'>
      <NavLink to="/"><img src={logo} alt="Maestro Logo" /></NavLink>
      <div className="navlinks-wrapper">
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink>
        <div className="dropdown-menu" ref={dropdownRef}>
          <span className={`dropdown-title ${showDropdown ? 'active' : ''}`} onClick={toggleDropdown}>
            Subjects <img className="dropdown-arrow" src={showDropdown == true ? "/arrow-up.png" : "arrow-down.png"} alt="Arrow" />
          </span>
          
          {showDropdown && (
            <div className="dropdown-list">
              {subjects.map((subject) => (
                <NavLink
                  key={subject.name}
                  id='dropdown-item'
                  to={subject.route}
                  className={({ isActive }) => (isActive ? 'active-sub' : '')}
                  onClick={toggleDropdown}
                >
                  <img src={subject.icon} alt={`${subject.name} icon`} />
                  <span>{subject.name}</span>
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <NavLink to="/pricing" className={({ isActive }) => (isActive ? 'active' : '')}>Pricing</NavLink>
        <NavLink to="/tutors" className={({ isActive }) => (isActive ? 'active' : '')}>Our Tutors</NavLink>
        <NavLink to="/careers" className={({ isActive }) => (isActive ? 'active' : '')}>Careers</NavLink>
        <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
        <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
        <button onClick={handleSubmit}>Book an appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
