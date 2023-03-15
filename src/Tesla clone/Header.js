import { useState } from "react";

function Header() {
   let [menu,setMenu] =useState(false)
   function Menuopen(e){
    e.preventDefault()
    setMenu(true)
   }
    return (
        <header>
            <img src="images/logo.svg"></img>
            <ul className='Models'>
                <li><a>Model S</a></li>
                <li><a>Model 3</a></li>
                <li><a>Model x</a></li>
                <li><a>Model y</a></li>
                <li><a>Solar Roof</a> </li>
                <li><a>Solar Panels</a> </li>

            </ul>

            <ul className="shop">
                <li> Shop </li>
                <li> <a>Account</a></li>
                <li> <a onClick={Menuopen}>Menu</a></li>
            </ul>


            <ul className="menu" style={{right:(menu ===false)? "-260px" : "0"}}>
                <li><a>Model S</a></li>
                <li><a>Model 3</a></li>
                <li><a>Model X</a></li>
                <li><a>Model Y</a></li>
                <li><a>Solar Roof</a></li>
                <li><a>Solar Panel</a></li>
                <li><a>Existing Inventory</a></li>
                <li><a>Used Inventory</a></li>
                <li><a>Trade In</a></li>
                <li><a>Test Drive</a></li>
                <li><a>Powerwall</a></li>
                <li><a>Commercial Energy</a></li>
            </ul>


        </header>
    )
}

export default Header;