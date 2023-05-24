import React from 'react';
import "./style.scss";
import { useState } from 'react';
const index = () => {

  
   const [esent, setEsent] = useState(false);

   const openMenu = () => {

    setEsent(esent => !esent)
   }

   return (
      <div className='header'>
         <h3 class='header_logo' >Logo</h3>
         <div className= {esent ? "open navbar" : "navbar"} >
            <a> <span>Home</span></a>
            <a><span>About</span></a>
            <a><span>Services</span></a>
            <a><span>Contact</span></a>
         </div>
         <button>Login</button>
         <i className={esent ? "bi bi-x-lg" : "bi bi-list"} id='nav-icon' onClick={openMenu}></i>

      </div>
   );
};

export default index;