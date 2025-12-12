import { Link } from "react-router-dom";
import Logo from  "../../assets/Logo.png"
function Header(){
    return (
        <>
           <header>
               <div>
                    <img src={Logo} alt="Logo do site, coração verde" />
                    <Link to="">Médicos & Dentistas</Link>
               </div>
               <nav>
                 <Link>Home</Link>
                 <Link>Seja Voluntário</Link>
               </nav>
            </header> 
        </>
    )
}

export default Header;