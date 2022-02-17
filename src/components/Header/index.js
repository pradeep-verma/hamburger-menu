import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          testid="hamburgerIconButton"
          className="menu-button"
        >
          <GiHamburgerMenu className="hamburgerMenu-icon" />
        </button>
      }
      position="bottom left"
      overlayStyle={{backgroundColor: '#ffff'}}
    >
      {close => (
        <div className="popup-container">
          <button
            type="button"
            className="popup-close-button"
            testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose className="popup-close-icon" />
          </button>
          <div className="popup-link-container">
            <Link to="/" className="popup-link">
              <AiFillHome className="popup-icon" />
              <h1 className="popup-text">Home</h1>
            </Link>
            <Link to="/about" className="popup-link">
              <BsInfoCircleFill className="popup-icon" />
              <h1 className="popup-text">About</h1>
            </Link>
          </div>
        </div>
      )}
    </Popup>
  </div>
)
export default Header
