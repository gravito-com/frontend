/* Modules */
import React, { Component, Fragment } from "react";

/* Components */
import Header from "../../components/Header/Header";

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section className="about" id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="about-info"
                  data-aos="fade-in"
                  data-aos-delay="300"
                >
                  <img
                    src="/img/gravito-founder.png"
                    alt="Juan Bedoya Profile"
                  />
                  <h3>
                    <span className="diff-class">Juan Bedoya</span>
                    <br />
                    Fundador de{" "}
                    <span className="special-color">Gravito.me</span>
                  </h3>
                  <p className="profile-description">
                    ¡Hey!, Soy desarrollador web fullstack (frontend, backend &
                    devops) con{" "}
                    <span className="text-bold">
                      <b>3 años</b> de experiencia laboral a tiempo completo
                    </span>
                    . <br />
                    <br />
                    Me gusta emplear tecnologias nuevas y sobre todo que me
                    impulse a querer seguir inovando.
                    <br />
                    Me especializo principalmente en el entorno{" "}
                    <span className="special-color">
                      <b>Javascript</b>
                    </span>
                    , tambien aplico mis conocimientos de{" "}
                    <span className="special-color">
                      <b>Dev Ops</b>
                    </span>{" "}
                    lo que me permise crear sistema y aportar demasiado valor en
                    areas como{" "}
                    <span className="special-color">
                      <b>Bussiness Intelligence</b>
                    </span>{" "}
                    y{" "}
                    <span className="special-color">
                      <b>Transformacion Digital</b>
                    </span>
                    .
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <ul className="social-media">
                      <li className="linkedin-link">
                        <a
                          href="https://www.linkedin.com/in/juan-gravito-me/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li className="github-link">
                        <a
                          href="https://github.com/Extibax"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-github-square"></i>
                        </a>
                      </li>
                    </ul>
                    <a
                      href="mailto:juan@gravito.me?subject=Quiero%20saber%20mas%20sobre%20los%20servicios%20que%20su%20agencia%20de%20desarrollo%20ofrece"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#af0000" }}
                    >
                      <b>juan@gravito.me</b>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="about-skills"
                  data-aos="fade-in"
                  data-aos-delay="300"
                >
                  <div className="skill-title">
                    <p>¿Que podemos ofrecerle a su Compañia/Startup?:</p>
                    <h3>
                      Capacidad de implementar cualqueira de estas tecnologias
                      en los desarrollos
                    </h3>
                    {/* Indice: <span className="learning-color">Learning</span> - */}
                    <span className="normal-color">Normal</span> -
                    <span className="special-color">Special</span>
                  </div>
                  <div className="skills">
                    <p className="my-2">Control de versiones y DevOps</p>
                    <div className="skill">AWS</div>
                    <div className="skill">Git</div>
                    <div className="skill">GitHub</div>
                    <p className="my-2">Frontend</p>
                    <div className="skill">HTML5</div>
                    <div className="skill">CSS3</div>
                    <div className="skill">JQuery</div>
                    <div className="skill">Bootstrap 5</div>
                    <div className="skill">React</div>
                    <div className="skill">Redux</div>
                    <div className="skill">React Native</div>
                    <div className="skill">Angular</div>
                    <p className="my-2">Back-End</p>
                    <div className="skill">JavaScript</div>
                    <div className="skill">Python</div>
                    <div className="skill">MeteorJs</div>
                    <div className="skill">NodeJS</div>
                    <div className="skill">Express</div>
                    <div className="skill">API's</div>
                    <div className="skill">REST</div>
                    <p className="my-2">
                      Empaquetador de modulos & Transpilador de Javascript
                    </p>
                    <div className="skill">Webpack</div>
                    <div className="skill">Babel</div>
                    <p className="my-2">Bases de Datos</p>
                    <div className="skill">SQL</div>
                    <div className="skill">MySQL</div>
                    <div className="skill">MongoDB</div>
                    <p className="my-2">Sistemas Operativos</p>
                    <div className="skill">Debian</div>
                    <div className="skill">Fedora</div>
                    <div className="skill">Ubuntu</div>
                  </div>
                  <a data-scroll href="#works" className="btn">
                    Mira nuestros proyectos{" "}
                    <i className="fas fa-arrow-down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="works" id="works">
          <div className="container">
            <h3>Proyectos</h3>
            <p>
              ¡Mira alguno de nuestros mas viejos proyectos (los actuales se
              subiran en cuestion de horas)!
            </p>
            <p className="bold">
              Mi{" "}
              <a
                href="https://github.com/Extibax"
                target="_blank"
                rel="noreferrer"
                className="special-color"
                style={{ textDecoration: "underline" }}
              >
                Portafolio de GitHub
              </a>{" "}
              siempre estara mas actualizado
            </p>

            <div className="row">
              <div className="col-md-12">
                <div
                  className="card-deck"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="card">
                    <img
                      src="/img/eprezto_screenshot.png"
                      className="card-img-top"
                      alt="REST API NodeJs MySQL"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Eprezto <i className="far fa-star"></i>
                      </h5>
                      <h6>Destacar:</h6>
                      <div className="card-text mb-2">
                        Broker de seguros online, Fui el desarrollador
                        principal, a cargo de todo el sistema, tanto del{" "}
                        <span className="text-bold">
                          frontend, backend y devops por 2 años y medio (05/2019
                          - 06/2021)
                        </span>
                        .
                      </div>
                      <h6>Tecnologias Empleadas:</h6>
                      <div className="card-text features">
                        <div>React</div>
                        <div>NodeJs</div>
                        <div>Express</div>
                        <div>MeteorJs</div>
                        <div>AWS</div>
                        <div>MongoDB</div>
                      </div>
                    </div>
                    <div className="card-footer text-center">
                      <a
                        href="https://github.com/Extibax/REST-API-NodeJs-MySQL"
                        target="_blank"
                        className="card-link"
                        rel="noreferrer"
                      >
                        Mirar Repositorio
                      </a>
                      <a
                        href="https://eprezto.com/"
                        target="_blank"
                        className="card-link"
                        rel="noreferrer"
                      >
                        Web de Produccion
                      </a>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="/img/todo_jquery_php.png"
                      className="card-img-top"
                      alt="TODO JQuery"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        To Do List PHP <i className="far fa-star"></i>
                      </h5>
                      <h6>Destacar:</h6>
                      <div className="card-text mb-2">
                        Login(Inicio y registro de sesion), ;Crear Tareas, Crear
                        categorias, View ToDo's, Filter ToDo's by category,
                        Editar tares, Eliminar tareas,
                      </div>
                      <h6>Tecnologias Empleadas:</h6>
                      <div className="card-text features">
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>Bootstrap 4.3.1</div>
                        <div>FontAwesome</div>
                        <div>JavaScript</div>
                        <div>JQuery 3.3.1</div>
                        <div>AJAX</div>
                        <div>PHP</div>
                        <div>Composer</div>
                        <div>DotEnv</div>
                        <div>AlertifyJs</div>
                        <div>MySQL</div>
                      </div>
                    </div>
                    <div className="card-footer text-center">
                      <a
                        href="https://github.com/Extibax/To-Do-JQuery-PHP"
                        target="_blank"
                        className="card-link"
                        rel="noreferrer"
                      >
                        Mirar Repositorio
                      </a>
                      {/* <a
                    href="http://extibax.com/Projects/To-Do-Extibax.inc/"
                    target="_blank"
                    className="card-link"
                    >View Project Demo</a
                  > */}
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="/img/customizable_portfolio_php_pdo_jquery.png"
                      className="card-img-top"
                      alt="CMS PHP JQuery"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Portfolio CMS PHP <i className="far fa-star"></i>
                      </h5>
                      <h6>Destacar:</h6>
                      <div className="card-text mb-2">
                        Login(Inicio y registro de sesion), Editar texto, links
                        y otros elementos de texto, Actualizar imagenes y
                        guardarlas en la base de datos
                        <br />
                        <br />
                        Muestra tu informacion profesional, y actualiza tus
                        textos e imagenes cada vez que quieras.
                      </div>
                      <h6>Tecnologias Empleadas:</h6>
                      <div className="card-text features">
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>Bootstrap 4.3.1</div>
                        <div>FontAwesome</div>
                        <div>JavaScript</div>
                        <div>JQuery 3.3.1</div>
                        <div>AJAX</div>
                        <div>PHP</div>
                        <div>Composer</div>
                        <div>DotEnv</div>
                        <div>PDO</div>
                        <div>MySQL</div>
                        <div>Quill</div>
                        <div>AlertifyJs</div>
                        <div>SweetAlert</div>
                      </div>
                    </div>
                    <div className="card-footer text-center">
                      <a
                        href="https://github.com/Extibax/Customizable-Portfolio"
                        target="_blank"
                        className="card-link"
                        rel="noreferrer"
                      >
                        Mirar Repositorio
                      </a>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="/img/login-nodejs-mysql-passport.png"
                      className="card-img-top"
                      alt="Login NodeJs"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Login NodeJs <i className="far fa-star"></i>
                      </h5>
                      <h6>Destacar:</h6>
                      <div className="card-text mb-2">
                        Create users and encrypt the password with bcryptjs,
                        Show flash messages, Login users and Close sessions,
                        Deployed on Heroku Crear usuarios y encripar su
                        contraseña, mostrar mensajes flash, login y cierre de
                        sesiones, lanzado en Heroku.
                      </div>
                      <h6>Tecnologias Empleadas:</h6>
                      <div className="card-text features">
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>Bootstrap 4.3.1</div>
                        <div>JavaScript</div>
                        <div>NodeJs</div>
                        <div>Express</div>
                        <div>MySQL</div>
                        <div>Morgan</div>
                        <div>Nodemon</div>
                        <div>DotEnv</div>
                        <div>Handlebars</div>
                        <div>BcryptJs</div>
                        <div>Passport</div>
                        <div>Flash</div>
                      </div>
                    </div>
                    <div className="card-footer text-center">
                      <a
                        href="https://github.com/Extibax/Login-NodeJs-MySQL-PassportJs"
                        target="_blank"
                        className="card-link"
                        rel="noreferrer"
                      >
                        Mirar Repositorio
                      </a>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="/img/profile_manager_php_jquery.png"
                      className="card-img-top"
                      alt="Profile Manager PHP JQuery"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Profile Manager PHP <i className="far fa-star"></i>
                      </h5>
                      <h6>Destacar:</h6>
                      <div className="card-text mb-2">
                        Puedes crear un perfil, loguearte y manegar tu
                        informacion personal, como tu imagen o biografia.
                      </div>
                      <h6>Tecnologias Empleadas:</h6>
                      <div className="card-text features">
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>Bootstrap</div>
                        <div>JavaScript</div>
                        <div>FormData</div>
                        <div>JQuery</div>
                        <div>PHP</div>
                        <div>PDO</div>
                        <div>MySQL</div>
                        <div>SweetAlert</div>
                        <div>Timeago JQuery</div>
                      </div>
                    </div>
                    <div className="card-footer text-center">
                      <a
                        href="https://github.com/Extibax/Profile-Manager-PHP-JQuery"
                        target="_blank"
                        className="card-link"
                        rel="noreferrer"
                      >
                        Mirar Repositorio
                      </a>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="/img/rest_api_nodejs_mongodb.png"
                      className="card-img-top"
                      alt="REST API NodeJs MongoDB"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        REST API ES10 NodeJs MongoDB{" "}
                        <i className="far fa-star"></i>
                      </h5>
                      <h6>Destacar:</h6>
                      <div className="card-text mb-2">
                        Mirar, agregar, actualizar y eliminar tecnologias, el
                        api es REST, el codigo de javascript transpilado con
                        Babel y los datos almacenados en MongoDB
                      </div>
                      <h6>Tecnologias Empleadas:</h6>
                      <div className="card-text features">
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>Bootstrap</div>
                        <div>JavaScript</div>
                        <div>ES10</div>
                        <div>JQuery</div>
                        <div>Babel</div>
                        <div>NodeJs</div>
                        <div>Express</div>
                        <div>MongoDB</div>
                        <div>Nodemon</div>
                        <div>EJS</div>
                        <div>Colors</div>
                      </div>
                    </div>
                    <div className="card-footer text-center">
                      <a
                        href="https://github.com/Extibax/REST-API-NodeJs-MongoDB"
                        target="_blank"
                        className="card-link"
                        rel="noreferrer"
                      >
                        Mirar Repositorio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <a data-scroll href="#contact" className="btn">
            Contact me <i className="fas fa-arrow-down"></i>
          </a> */}
        </section>
        {/* <footer className="contact" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form
                  id="form"
                  method="POST"
                  data-aos="zoom-in-up"
                  data-aos-delay="300"
                >
                  <h3>Contact me</h3>
                  <p>¡Let's work together!</p>
                  <div className="form-group">
                    <label htmlFor="fullname">Full name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="fullname"
                      id="fullname"
                      placeholder="¡Please type your name here!"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="¡Please type your email here!"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      placeholder="¡Type the magical words!"
                      cols="30"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button className="btn">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-info">
            <div className="copyright">
              &copy; All Right Reserved By
              <a href="http://extibax.com/" target="_blank" rel="noreferrer">
                Extibax inc
              </a>{" "}
              & Licenced by
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noreferrer"
              >
                MIT
              </a>
              Web maked by Juan Bedoya (Extibax)
            </div>
            <div className="up" id="up">
              <i className="fas fa-caret-up"></i>
            </div>
            <ul className="social-media">
              <li className="linkedin-l ink">
                <a
                  href="https://www.linkedin.com/in/extibax/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="github-link">
                <a
                  href="https://github.com/Extibax"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer> */}
      </Fragment>
    );
  }
}

export default Portfolio;
