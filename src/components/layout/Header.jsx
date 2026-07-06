import {FiMenu} from "react-icons/fi"; 
function Header({collapsed , setCollapsed})
{
    return(
         <header className="header" >
            <div>
                <button onClick={()=>setCollapsed(!collapsed)} >
                     < FiMenu/> </button>
            </div>
            <div>
                Khadija 
            </div>
         </header>
    );
}

export default Header