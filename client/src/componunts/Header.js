import React from 'react';
import Logo from './img/logo.jpg'
function Header() {
  return (
    <>
      <div class="header">
        <div class="container">
          <div class="navbar">
            <div class="logo">
              <a href="/"><img src={Logo} alt="logo" width="155px" /></a>
            </div>
            <nav>
              <ul id="MenuItems">
                <li><a href="/homebio">Biodiversity Map</a></li>
                <li><a href="/planthome">Plant Details</a></li>
                <li><a href="/home">SeedBank</a></li>
                <li><a href="/homebird">Animal/Bird Details</a></li>
              </ul>
            </nav>
  
            <img src="" alt="menu" class="menu-icon" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
