import Header from '../Header'

const About = () => (
  <div className="app-container">
    <Header />
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-image-lg"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about-image-sm"
      />
    </div>
  </div>
)
export default About
