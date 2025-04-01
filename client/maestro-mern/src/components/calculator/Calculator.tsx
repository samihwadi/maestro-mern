import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Calculator.scss';

type TutorType = 'online' | 'in-person'| '';
type Grade = '9' | '10' | '11' | '12';

const subjectsList = ['Mathematics', 'Physics', 'Chemistry', 'Biology'];

const Calculator = () => {
    const [type, setType] = useState<TutorType>('');
    const [grade, setGrade] = useState<Grade>('9');
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Mathematics']);
    const [lessonsPerWeek, setLessonsPerWeek] = useState<number>(2);
    const [duration, setDuration] = useState<number>(1.5);
    const [hourlyRate, setHourlyRate] = useState<string>('');
    const [weeklyRate, setWeeklyRate] = useState<string>('');
    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/book-lesson');
    }

    const toggleSubject = (subject: string) => {
        setSelectedSubjects((prev) =>
        prev.includes(subject)
            ? prev.filter((s) => s !== subject)
            : [...prev, subject]
        );
    };
    useEffect(() => {
        if (selectedSubjects.length === 0) return;
    
        const timeout = setTimeout(() => {
        calculate();
        }, 400);
    
        return () => clearTimeout(timeout);
    }, [type, grade, selectedSubjects, lessonsPerWeek, duration]);
  

    const calculate = async () => {
        try {
        const res = await axios.post('http://localhost:4000/api/calculator', {
            type,
            grade,
            subjects: selectedSubjects,
            lessonsPerWeek,
            duration,
        });

        setHourlyRate(res.data.hourlyRate);
        setWeeklyRate(res.data.weeklyRate);
        } catch (err) {
        console.error('Calculation error:', err);
        }
    };

  return (
    <div className="calculator-container">
        <div className="calculator-content-wrapper">
            <div className="calculator-header">
                <img src="/icons/calculator-icon.png" alt="Calculator Icon" />
                <h1>PRICE CALCULATOR</h1>
                <p>Our pricing calculator helps you make the best decision for your family and future.</p>
            </div>
            <div className="form-section-wrapper">
                <div className="form-section">
                    <h3>1. What type of tutoring do you need:</h3>
                    <div className="button-group">
                        <button className={type === 'in-person' ? 'active' : ''} onClick={() => setType('in-person')}>In home</button>
                        <button className={type === 'online' ? 'active' : ''} onClick={() => setType('online')}>Online</button>
                    </div>
                    
                    <div className="inline-field">
                        <h3>2. In which grade is the student studying:</h3>
                        <select value={grade} onChange={(e) => setGrade(e.target.value as Grade)}>
                            <option value="9">Grade 9</option>
                            <option value="10">Grade 10</option>
                            <option value="11">Grade 11</option>
                            <option value="12">Grade 12</option>
                        </select>
                    </div>
                    <h3>3. Select the subjects you need help with:</h3>
                    <div className="button-group">
                        {subjectsList.map((subject) => (
                            <button
                            key={subject}
                            className={selectedSubjects.includes(subject) ? 'active' : ''}
                            onClick={() => toggleSubject(subject)}
                            >
                            {subject}
                            </button>
                        ))}
                    </div>
                    
                    <div className="inline-field">
                        <h3>4. How many lessons do you need per week:</h3>
                        <select value={lessonsPerWeek} onChange={(e) => setLessonsPerWeek(Number(e.target.value))}>
                        <option value={2}>2 per week</option>
                        <option value={3}>3 per week</option>
                        <option value={4}>4 per week</option>
                        </select>
                    </div>
                    
                    <div className="inline-field">
                        <h3>5. How long do you want the lessons to be:</h3>
                        <select value={duration} onChange={(e) => setDuration(Number(e.target.value))}>
                        <option value={1}>1 hour</option>
                        <option value={1.5}>1.5 hours</option>
                        <option value={2}>2 hours</option>
                        <option value={2.5}>2.5 hours</option>
                        </select>
                    </div>
                </div>

                <div className="result-section">
                    <h2>You can get started with approximately</h2>
                    <h1>{hourlyRate || '$-- CAD per hour'}</h1>
                    <p className='runner'>*Subject to change according to tutor rates</p>
                    <p>Billed weekly, approximately</p>
                    <h3>{weeklyRate || '$-- CAD per week'}</h3>
                    <div className="button-container">
                        <h2>Let's get started with Maestro</h2>
                        <button onClick={handleSubmit} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >Book a lesson 
                            <img  
                            src={isHovered ? "/arrow-right-dark.png" : "/arrow-right-light.png"}  
                            alt="Right Arrow Icon" 
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Calculator;
