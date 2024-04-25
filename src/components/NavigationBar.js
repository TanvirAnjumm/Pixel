import React from 'react';
import logo from '../assents/logo.png';

function NavigationBar() {
  return (
    <nav class="navbar navigationBar">
    <div class="logo"><img src={logo} alt="Logo" style={{ width: '116px', height: '30px' }}/></div>

    <ul class="nav-links">
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

      <div class="menu">
        <li><a href="/">BRANDS</a></li>
        <li><a href="/">CAMERAS</a></li>

        <li class="services">
          <a href="/">LENSES</a>
          <ul class="dropdown">
            <li><a href="/">Dropdown 1 </a></li>
            <li><a href="/">Dropdown 2</a></li>
            <li><a href="/">Dropdown 2</a></li>
            <li><a href="/">Dropdown 3</a></li>
            <li><a href="/">Dropdown 4</a></li>
          </ul>

        </li>

        <li><a href="/">ACCESSORIES</a></li>
        <li><a href="/">STUDIO</a></li>
        <li><a href="/">EXTREME</a></li>
        <li><a href="/">USED</a></li>
      </div>
    </ul>
  </nav>
  );
}

export default NavigationBar;