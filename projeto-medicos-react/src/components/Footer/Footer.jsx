import Logo from "../../assets/Logo.png";
import S from "./Footer.module.scss";
import Email from "../../assets/email.png"
import Local from "../../assets/local.png"
import Telefone from "../../assets/telefone.png"


function Footer(){
  return (
    <>
       <footer className={S.footer}>
         <section className={S.container}>
            <div className={S.rodapeColuna}>
              <figure className={S.logo}>
              <img src={Logo} alt="Imagem da saúde" /> 
                <figcaption>Médicos & Dentistas</figcaption>
              </figure>
              <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
            </div>
          <div className={S.rodapeColuna}>
            <h2>Contato</h2>
            <ul>
              <li>
                <img src={Email} alt="Email" />
                contato@medico-dentista.org</li>
              <li><img src={Local} alt="Email" />(11) 3000-0000</li>
              <li><img src={Telefone} alt="Email" />São Paulo, Brasil</li>
            </ul>
          </div>
          
          <div className={S.rodapeColuna}>
            <h2>Redes Sociais</h2>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
         </section>
         <hr />
         <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
       </footer>
    </>
  )
}

export default Footer;