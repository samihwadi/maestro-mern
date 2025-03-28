import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SubjectBtn.scss'

type Subject = {
  name: string;
  key: string;
  icon: string;
  caption: string;
};

const subjects: Subject[] = [
  { name: "mathematics", key: "math", icon: "math-icon", caption: "Mathematics" },
  { name: "physics", key: "physics", icon: "physics-icon", caption: "Physics" },
  { name: "chemistry", key: "chem", icon: "chem-icon", caption: "Chemistry" },
  { name: "biology", key: "bio", icon: "biology-icon", caption: "Biology" },
];

const SubjectBtn = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNavigation = (subjectName: string) => {
    navigate(`/${subjectName}`);
  };

  return (
    <div className="subject-button-container">
      {subjects.map((subject, index) => (
        <div
          key={subject.key}
          className={`subjects card-${index + 1}`}
          onClick={() => handleNavigation(subject.name)}
          onMouseEnter={() => setHovered(subject.key)}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            className={subject.key}
            src={
              hovered === subject.key
                ? `/icons/${subject.icon}-hover.svg`
                : `/icons/${subject.icon}.svg`
            }
            alt={`${subject.name} icon`}
          />
            <p>{subject.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default SubjectBtn;
