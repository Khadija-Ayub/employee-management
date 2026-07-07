import {FiMenu} from "react-icons/fi"; 
import "../../styles/header.css";
function Header({collapsed , setCollapsed})
{
    return(
         <header className="header" >
            <div className="header-left" >
                <button className="menu-btn" onClick={()=>setCollapsed(!collapsed)} >
                     < FiMenu/> </button>
                <span className="title" > Employee Management System</span>
            </div>
            <div className="header-right">
             <div className="user-info">
               <span className="username">Khadija</span> 
             </div> 
            </div> 
         </header>
    );
}

export default Header