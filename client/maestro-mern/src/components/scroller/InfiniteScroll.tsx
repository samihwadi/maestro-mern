import './InfiniteScroll.scss'
type Uni = {
    name: string;
    uni_url: string;
}

const universities: Uni[] = [
    { name: "TMU", uni_url: "/uni-logos/tmu_logo.png"},
    { name: "UofT", uni_url: "/uni-logos/uoft_logo.png"},
    { name: "York University", uni_url: "/uni-logos/york_logo.png"},
    { name: "George Brown", uni_url: "/uni-logos/george_b_logo.png"},
    { name: "Seneca", uni_url: "/uni-logos/seneca_logo.png"},
    { name: "McMaster University", uni_url: "/uni-logos/mcmaster_logo.png"},
]

const InfiniteScroll = () => {
  return (
    <div className="scroll-container">
        <div className="scroll-text">
            <h2>Our tutors are hand-picked from top colleges and universities</h2>
        </div>
        <div className="scroller">
            <div className="logo-track">
                {[...universities, ...universities].map((university, index) => (
                <div className="logo-slide" key={index}>
                    <img src={university.uni_url} alt={`${university.name} logo`} />
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default InfiniteScroll
