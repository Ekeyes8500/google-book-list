import React from "react";

function Nav(){
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Google Books</a>
        <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Searched</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Saved</a>
      </li>
    </ul>
    </nav>
    )
}

export default Nav;