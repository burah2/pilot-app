// src/components/DropdownMenu.jsx
import React from 'react';
import "../Styles.css";

const DropdownMenu = () => {
  // Define your dropdown items
  const dropdownItems = [
    { link: 'https://www.translink.co.uk/home', text: 'Times&Tickets' },
    { link: '#journey-option2', text: 'Next Service' },
    // Add more dropdown items as needed
  ];

  return (
    <div className="dropdown-menu">
      <div className="navbar-item has-dropdown is-active" role="menuitem">
        <div className="navbar-link" aria-haspopup="true" aria-expanded="false" tabIndex="-1" data-nametext="Your Journey">
          {/* Icon and text for Your Journey */}
          <i className="fas fa-globe"></i> Your Journey
          {/* Add any additional content or styling for the dropdown trigger */}
        </div>
        <ul className="navbar-dropdown is-boxed is-radiusless" role="menu" aria-label="Your Journey">
          {/* Map through the dropdown items and create list items */}
          {dropdownItems.map((item, index) => (
            <li key={index} role="menuitem">
              <a href={item.link} className="navbar-item">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
