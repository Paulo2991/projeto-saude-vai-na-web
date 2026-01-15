import S from "./Home.module.scss";
import Saude from "../../assets/saude.png";
import Medico from "../../assets/medico.png";
import { Link } from "react-router-dom";

function Home(){
  return(
    <>
      <main>
        <section className={S.hero}>
          <div className={S.context}>
            <div>
               <img src={Saude} alt="Imagem de saúde" />
            </div>
          <h1>Saúde e cuidado sem barreiras</h1>
          <p className={S.text}>
             Um projeto dedicado a oferecer atendimento médico 
             e odontológico gratuito para pessoas que mais precisam na nossa comunidade.
          </p>
        <div className={S.boxButton}>
          <Link to="/voluntarios">Seja Voluntario</Link>
          <a href="">Como Ajudar</a>
        </div>
        </div>
        <div className={S.imagemMedico}>
          <img src={Medico} alt="Imagem de médico" />
        </div>
        </section>
        <section className={S.missao}>
          <h2>Nossa Missão</h2>
          <p className={S.missao_text}>Transformar vidas através do acesso universal a saúde de qualidade</p>
          <div className={S.missao_cards}>
            <article className={S.missao_card}>
              <h3>Acesso Equitativo</h3>
              <p>Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira.</p>
            </article>
            <article className={S.missao_card}>
              <h3>Comunidade Forte</h3>
              <p>Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo.</p>
            </article>
            <article className={S.missao_card}>
              <h3>Bem-estar Total</h3>
              <p>Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida.</p>
            </article>
          </div>
        </section>
        <section className={S.missao}>
          <h2>Nosso Impacto</h2>
          <p className={S.missao_text}>Transformando a saúde de nossa comunidade, um paciente de cada vez</p>
          <div className={S.missao_cards}>
            <article className={S.missao_card}>
              <h3>2,500+</h3>
              <p>Pessoas Atendidas</p>
            </article>
            <article className={S.missao_card}>
              <h3>150+</h3>
              <p>Profissionais Voluntários</p>
            </article>
            <article className={S.missao_card}>
              <h3>98%</h3>
              <p>Satisfação dos Pacientes</p>
            </article>
            <article className={S.missao_card}>
              <h3>5+</h3>
              <p>Anos de Dedicação</p>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home;