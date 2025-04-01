import { useState } from "react";
import './Reviews.scss';

interface Paragraph {
    review: string;
    by: string;
}

const Reviews = () => {
    const paragraphs: Paragraph[] = [
        {
            review: "Maestro has been a great help for me and my kids, and I think it was a huge benefit for me to be able to choose a tutor from the comfort of my home and find someone that caters to my childs liking",
            by: "Sabiha Rahman - A proud parent",
        },
        {
            review: "We’ve had such a positive experience with Maestro. My son really enjoys learning with Ahnaf, and the entire staff has been fantastic. It’s a top tier tutoring service that’s worth every bit",
            by: "Bernadette Obasi - Parent of a high schooler",
        },
        {
            review: "I had such a hard time understanding chemistry until I started with Maestro. They’ve made a big difference and have been super supportive. I’ve stuck with them for a couple months now and it's been great",
            by: "Lily - Grade 11",
        },
        {
            review: "What I love most is the personalized approach. My son’s tutor truly understands how he learns best",
            by: "Deborra Lee",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    const triggerAnimation = (newIndex: number) => {
        setAnimate(true);
        setTimeout(() => {
        setAnimate(false);
        setCurrentIndex(newIndex);
        }, 700); 
    };
    const goToNext = () => {
        if (currentIndex < paragraphs.length - 1) {
          setCurrentIndex(currentIndex + 1);
          triggerAnimation(currentIndex + 1);
        }
    };

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
          triggerAnimation(currentIndex - 1);

        }
    };
  return (
    <div className='reviews-container'>
        <div className="reviews-content-wrapper">
            <div className="reviews-icon">
                <img src="/icons/review-icon.png" alt="Quotation mark icon" />
            </div>
            <h1>Their Journey, In Their Words</h1>
            <div className="testimonials-wrapper">
                <button 
                    onClick={goToPrevious}
                    className={`arrow-button left ${currentIndex === 0 ? 'disabled' : ''}`}
                    disabled={currentIndex === 0}
                >
                    <img src="/arrow-right-dark.png" alt="Left arrow icon" className="flipped-image"/> 
                </button>
                <div className={`carousel-text ${animate ? 'animate-scroll' : ''}`}>
                    <p className="review">"{paragraphs[currentIndex].review}"</p>
                    <p className="by">{paragraphs[currentIndex].by}</p>
                </div>
                <button
                    onClick={goToNext}
                    className={`arrow-button right ${currentIndex === paragraphs.length - 1 ? 'disabled' : ''}`}
                    disabled={currentIndex === paragraphs.length - 1}
                >
                    <img src="/arrow-right-dark.png" alt="Right arrow icon" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Reviews
