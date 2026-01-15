import { Link } from "react-router-dom";
import Logo from  "../../assets/Logo.png";
import S from "./Header.module.scss";

function Header(){
    return (
        <>
           <header className={S.cabecalho}>
               <div className={S.boxLogo}>
                    <img src={Logo} alt="Logo do site, coração verde" />
                    <Link to="/">Médicos & Dentistas</Link>
               </div>
               <nav>
                 <Link to="/">Home</Link>
                 <Link to="/voluntario">Seja Voluntário</Link>
               </nav>
            </header> 
        </>
    )
}

export default Header;