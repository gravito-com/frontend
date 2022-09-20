import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Tenemos lo que necesita</h2>
              <p>Nosotros a comparacion de la competencia ofrecemos:</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Mas adaptados al cliente, lo escuchamos y nos enfocamos en eso, primero el cliente siempre.</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Mas resultados visibles, sin tanto tecnisimo, solo gestionara lo mas importante y sin enredo.</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Servicios de alta calidad, el equipo tiene años en el mercado y conoce como beneficiar a nuestros clientes.</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
