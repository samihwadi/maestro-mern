import { useState } from 'react';
import './Expandable.scss';

const Expandable = () => {
  const [expandedSections, setExpandedSections] = useState({
    tutoring: true,
    testPrep: true,
    summer: true,
    homework: true,
  });

  const toggleExpand = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className='expandable-container'>
      <h1>Our tutors can help you with</h1>
      <div className="expandable-text-wrapper">
        <div className="column-one">
            <div className="row-headers">
                <button onClick={() => toggleExpand('tutoring')}>
                    <img className={expandedSections.tutoring ? "expanded" : ""} src="/icons/expandable-icon.png" alt="Expand arrow icon" />
                    Regular Tutoring
                </button>
                {expandedSections.tutoring && (
                    <p>
                    Stay on track with regular tutoring sessions! Our consistent support helps reinforce key concepts,
                    improve grades, and build lasting academic skills over time.
                    </p>
                )}
            </div>
            <div className="row-headers">
                <button onClick={() => toggleExpand('testPrep')}>
                    <img className={expandedSections.testPrep ? "expanded" : ""} src="/icons/expandable-icon.png" alt="Expand arrow icon" />
                    Test/Exam Preparation
                </button>
                {expandedSections.testPrep && (
                    <p>
                    Prepare with confidence! Our test and exam prep sessions focus on key topics, strategies, and practice
                    to help you succeed when it matters most.
                    </p>
                )}
            </div>
        </div>

        <div className="column-two">
            <div className="row-headers">
                <button onClick={() => toggleExpand('summer')}>
                    <img className={expandedSections.summer ? "expanded" : ""} src="/icons/expandable-icon.png" alt="Expand arrow icon" />
                    Summer Courses
                </button>
                {expandedSections.summer && (
                    <p>
                    Keep learning through the summer with our tutoring support! We offer flexible sessions to help reinforce
                    skills, catch up on missed work, or get ahead for the next school year.
                    </p>
                )}
            </div>
            <div className="row-headers">
                <button onClick={() => toggleExpand('homework')}>
                    <img className={expandedSections.homework ? "expanded" : ""} src="/icons/expandable-icon.png" alt="Expand arrow icon" />
                    Homework Help
                </button>
                {expandedSections.homework && (
                    <p>
                    Stuck on a problem? Our homework help gives you the support you need to understand tough topics and
                    complete assignments with confidence.
                    </p>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Expandable;
