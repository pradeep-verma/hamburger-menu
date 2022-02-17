import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="app-container">
    <Header />
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="not-found-title">Lost Your Way?</h1>
      <p className="not-fount-text">
        Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on
        the home page
      </p>
    </div>
  </div>
)
export default NotFound
