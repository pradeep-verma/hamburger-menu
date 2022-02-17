import Header from '../Header'

const Home = () => (
  <div className="app-container">
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-image-lg"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="home-image-sm"
      />
    </div>
  </div>
)
export default Home
