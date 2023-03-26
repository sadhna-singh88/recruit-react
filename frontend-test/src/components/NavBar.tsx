import React from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//Define funtion for NavBar
const NavBar: React.FC = () => {
  return (
    <nav>
       <div>
            <FontAwesomeIcon icon={faBars} />
            <span>Register Card Form</span>
          </div>
    </nav>
  );
};

export default NavBar