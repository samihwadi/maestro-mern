import './MethodCards.scss'
const MethodCards = () => {
  return (
    <div className="methods-container">
        <div className="methods-content-wrapper">
            <h1>We provide in-home and online tutoring</h1>
            <div className="method-cards-wrapper">
                <div className="irl-card">
                    <img src="/in-home-card.png" alt="Old picture of a classroom" />
                    <div className="card-text-wrapper">
                        <div className="card-text">
                            <h3>In-home Tutoring</h3>
                            <p>Your goals. Your pace. Your space. In-home tutoring that meets you where you are and helps you get where you want to be</p>
                        </div>
                        <div className="locations-wrapper">
                            <img src="/icons/location-icon.png" alt="Location marker icon" />
                            <p>Toronto (Downtown, North York, Etobicoke, Scarborough), Markham, Vaughan</p>
                        </div>
                    </div>
                </div>
                <div className="online-card">
                    <img src="/online-card.png" alt="Old picture of a classroom" />
                    <div className="card-text-wrapper">
                        <div className="card-text">
                            <h3>Online Tutoring</h3>
                            <p>Wherever you are, peace of mind comes with knowing learning is still on track. Our online tutoring is flexible, focused, and just a click away</p>
                        </div>
                        <div className="locations-wrapper">
                            <img src="/icons/online-icon.png" alt="Laptop icon" />
                            <p>Zoom, Microsoft Teams</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MethodCards
