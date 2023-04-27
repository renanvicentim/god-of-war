import Logo from "../../assets/img/logo.svg";
import Video from "../../assets/video/god-of-war.mp4";
import ArrowLeft from "../../assets/img/arrow-left.svg";
import ArrowRight from "../../assets/img/arrow-right.svg";
import Kratos from "../../assets/img/kratos.svg";
import Atreus from "../../assets/img/atreus.svg";
import Freya from "../../assets/img/freya.svg";
import Angrboda from "../../assets/img/angrboda.svg";
import Photo1 from "../../assets/img/photo-1.svg";
import Photo2 from "../../assets/img/photo-2.svg";
import Photo3 from "../../assets/img/photo-3.svg";
import Machado from "../../assets/img/machado.svg";
import Arco from "../../assets/img/arco-flecha.svg";
import {
  Container,
  FirstSection,
  Header,
  BtnPrimary,
  BtnSecondary,
  SecondSection,
  ThirdSection,
  FourthSection,
} from "./styles";

function App() {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="logo" />
        <nav>
          <a>Vídeos e Telas</a>
          <a>Bastidores</a>
          <a>Comunidade</a>
          <BtnPrimary>Compre Agora</BtnPrimary>
        </nav>
      </Header>

      <main>
        <FirstSection>
          <h1>Um mundo mais sombrio e primitivo</h1>
          <p>
            Do mármore e colunas ornadas do Ólimpo para as florestas, este é um
            reino novo, com suas próprias espécies de criaturas, monstros e
            deuses
          </p>

          <div className="container-actions">
            <BtnPrimary href="">Compre Agora</BtnPrimary>
            <BtnSecondary>Saiba Mais</BtnSecondary>
          </div>

          <div className="container-video">
            <video autoPlay muted controls>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </FirstSection>

        <SecondSection>
          <h2>Os maiores heróis dos Noves Reinos</h2>

          <div className="container-carousel">
            <img className="arrow" src={ArrowLeft} alt="arrow-left" />

            <div className="container-items">
              <div className="carousel-item">
                <img className="item" src={Kratos} alt="kratos" />
                <p>Kratos</p>
              </div>

              <div className="carousel-item">
                <img className="item" src={Atreus} alt="atreus" />
                <p>Atreus</p>
              </div>

              <div className="carousel-item">
                <img className="item" src={Freya} alt="freya" />
                <p>Freya</p>
              </div>

              <div className="carousel-item">
                <img className="item" src={Angrboda} alt="angrboda" />
                <p>Angrboda</p>
              </div>
            </div>

            <img className="arrow" src={ArrowRight} alt="arrow-right" />
          </div>
        </SecondSection>

        <ThirdSection>
          <div className="container-photos">
            <img src={Photo1} alt="photo-1" />
            <img src={Photo2} alt="photo-2" />
            <img src={Photo3} alt="photo-3" />
          </div>

          <div className="container-description">
            <h2>Lute no Reino Nórdico</h2>
            <p>
              Com a vingança contra os deuses do Olímpo em um passado distante,
              Kratos agora vive como um mortal no reino dos deuses e monstros
              nórdicos. É nesse mundo duro e implacável que ele deve lutar para
              sobreviver... e ensinar seu filho a fazer o mesmo.
            </p>
          </div>
        </ThirdSection>

        <FourthSection>
          <h2>Armas Lendárias</h2>

          <div className="container-weapons">
            <div className="weapon">
              <div className="weapon-description">
                <h3>Poder Rúnico Refinado</h3>
                <p>
                  Novas habilidades permitem que Kratos use seu machado de
                  maneira inéditas
                </p>
                <BtnPrimary>Saiba mais</BtnPrimary>
              </div>
              <img src={Machado} alt="machado" />
            </div>

            <div className="weapon">
              <div className="weapon-description">
                <h3>Mais do que um garoto com um arco</h3>
                <p>
                  Atreus aprimorou suas habilidades de arquearia para desferir
                  novos ataques
                </p>
                <BtnPrimary>Saiba mais</BtnPrimary>
              </div>
              <img src={Arco} alt="arco" />
            </div>
          </div>
        </FourthSection>
      </main>
    </Container>
  );
}

export default App;
