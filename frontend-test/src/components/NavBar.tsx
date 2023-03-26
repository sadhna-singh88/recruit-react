import React,{useEffect,useState} from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//Define funtion for NavBar
const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add('menu-open'); // Add class to body when menu is shown
    } else {
      document.body.classList.remove('menu-open'); // Remove class from body when menu is closed
    }
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav>
       
      {!showMenu && (
        <div className="menu-icon" onClick={toggleMenu}>
          <div>
            <FontAwesomeIcon icon={faBars} />
            <span>Register Card Form</span>
          </div>
        </div>
      )}
      {showMenu && (
        <div className="menu">
          <div className="back-button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Menu</span>
          </div>
          <ul className="menu-list">
           
          </ul>
        </div>
      )}
    </nav>
  );
}
    
 

export default NavBar