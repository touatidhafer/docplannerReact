import React, { Component } from 'react';
import '../App.css';
class Header extends Component {
         
        state = {  }
    
    render() { 
        return ( 
            <div style={{height:'40px'}}>
                <header className='header'>
                    <navbar className='nav-bar'>
                         <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" className="logo1" alt="logo1"   />
                         <ul className="ul-menu">
                             <li className="li-items1"> About us </li>
                             <li className="li-items2"> Career </li>
                             <li className="li-items3">Departements
                                <div className="dropdowns">
                                   <a href="https://www.docplanner.com/department?dep=marketing" > Marketing & PR </a>
                                   <a href="https://www.docplanner.com/department?dep=customer" > Customer Succes & Sales  </a>
                                   <a href="https://www.docplanner.com/department?dep=it" > IT, Product , Design & UX</a>
                                   <a href="https://www.docplanner.com/department?dep=finance" > Finance & Administration </a>
                                   <a href="https://www.docplanner.com/department?dep=hr" > HR & more </a>
                               </div>
        
                             </li>
                         </ul>  
                    </navbar>
                </header>
            </div>
         );
    }
}
 
export default Header
;