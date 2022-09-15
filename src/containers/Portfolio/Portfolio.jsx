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
                    src="/img/JuanBedoya.jpg"
                    alt="Juan Bedoya Image Profile"
                  />
                  <h3>
                    Juan Bedoya, Founder of{" "}
                    <span className="special-color">Gravito Services</span>
                  </h3>
                  <p className="profile-description">
                    ¡Hi!, I'm a full stack developer with{" "}
                    <span className="text-bold">
                      <b>3 years</b> of professional experience as a full-time
                      developer
                    </span>
                    . <br />
                    <br />I like the moderns technologies and I'm in the way of
                    the full stack developers, more than anything with the
                    <span className="special-color">
                      <b>Javascript</b>
                    </span>
                    environment.
                  </p>
                  <div>
                    <ul className="social-media">
                      <li className="linkedin-link">
                        <a
                          href="https://www.linkedin.com/in/extibax/"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li className="github-link">
                        <a href="https://github.com/Extibax" target="_blank">
                          <i className="fab fa-github-square"></i>
                        </a>
                      </li>
                    </ul>
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
                    <p>¿What can we offer to your Company/Startup?:</p>
                    <h3>Knowledges In</h3>
                    Labels: <span className="learning-color">Learning</span> -
                    <span className="normal-color">Normal</span> -
                    <span className="special-color">Special</span>
                  </div>
                  <div className="skills">
                    <p className="my-2">Web Services</p>
                    <div className="skill special">AWS</div>
                    <p className="my-2">Front-End</p>
                    <div className="skill special">HTML5</div>
                    <div className="skill special">CSS3</div>
                    <div className="skill special">JQuery</div>
                    <div className="skill">Bootstrap 4</div>
                    <div className="skill special">React</div>
                    <div className="skill special">Redux</div>
                    <div className="skill learning">Angular</div>
                    <div className="skill learning">React Native</div>
                    <p className="my-2">Back-End</p>
                    <div className="skill special">JavaScript</div>
                    <div className="skill learning">Python</div>
                    <div className="skill">OOP</div>
                    <div className="skill">MVC</div>
                    <div className="skill">PHP</div>
                    <div className="skill special">MeteorJs</div>
                    <div className="skill special">NodeJS</div>
                    <div className="skill special">Express</div>
                    <div className="skill special">API's</div>
                    <div className="skill special">REST</div>
                    <p className="my-2">
                      Module Bundler & JavaScript Transpiler
                    </p>
                    <div className="skill">Webpack</div>
                    <div className="skill">Babel</div>
                    <p className="my-2">Version Control & Code Hostings</p>
                    <div className="skill">Git</div>
                    <div className="skill">GitHub</div>
                    <p className="my-2">Data Bases</p>
                    <div className="skill special">SQL</div>
                    <div className="skill special">MySQL</div>
                    <div className="skill special">MongoDB</div>
                    <p className="my-2">Operative Systems</p>
                    <div className="skill special">Debian</div>
                    <div className="skill special">Fedora</div>
                    <div className="skill special">Ubuntu</div>
                  </div>
                  <a data-scroll href="#works" className="btn">
                    View my works <i className="fas fa-arrow-down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="works" id="works">
          <div className="container">
            <h3>Works</h3>
            <p>¡View my last works!</p>
            <p>
              Projects with <i className="far fa-star"></i>, Are ready
            </p>
            <p className="bold">
              My
              <a
                href="https://github.com/Extibax"
                target="_blank"
                rel="noreferrer"
                className="special-color"
                style={{ textDecoration: "underline" }}
              >
                GitHub Portfolio
              </a>
              will always be more updated
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
                      <h6>Features:</h6>
                      <div className="card-text mb-2">
                        Online Insurance Broker, I was the main developer, in
                        charge of the
                        <span className="text-bold">
                          Front-end and Back-end for 2 years and half (05/2019 -
                          06/2021)
                        </span>
                        .
                      </div>
                      <h6>Technologies Used:</h6>
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
                      >
                        View Repository
                      </a>
                      <a
                        href="https://eprezto.com/"
                        target="_blank"
                        className="card-link"
                      >
                        View Production Web
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
                      <h6>Features:</h6>
                      <div className="card-text mb-2">
                        Login(Sign In, Sign Up), ;Create ToDo's, Create
                        categories, View ToDo's, Filter ToDo's by category, Edit
                        ToDo's, Delete ToDo's,
                      </div>
                      <h6>Technologies Used:</h6>
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
                      >
                        View Repository
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
                      <h6>Features:</h6>
                      <div className="card-text mb-2">
                        Login(Sign In, Sign Up), Edit text, links and other text
                        elements, Update images & save in the Database
                        <br />
                        <br />
                        Show your professional info, And update your texts and
                        images each time do you want.
                      </div>
                      <h6>Technologies Used:</h6>
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
                      >
                        View Repository
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
                      <h6>Features:</h6>
                      <div className="card-text mb-2">
                        Create users and encrypt the password with bcryptjs,
                        Show flash messages, Login users and Close sessions,
                        Deployed on Heroku
                      </div>
                      <h6>Technologies Used:</h6>
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
                      >
                        View Repository
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
                      <h6>Features:</h6>
                      <div className="card-text mb-2">
                        You can create a profile, login and manage your personal
                        info, Like Profile Image, Or Bio text
                      </div>
                      <h6>Technologies Used:</h6>
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
                      >
                        View Repository
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
                      <h6>Features:</h6>
                      <div className="card-text mb-2">
                        See technologies, Add technologies, Update technologies,
                        Delete technologies, The API is created with the REST
                        rules, The JavaScript code is transpiled with Babel, and
                        the data is stored in MongoDB
                      </div>
                      <h6>Technologies Used:</h6>
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
                      >
                        View Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a data-scroll href="#contact" className="btn">
            Contact me <i className="fas fa-arrow-down"></i>
          </a>
        </section>
        <footer className="contact" id="contact">
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
              <a href="http://extibax.com/" target="_blank">
                Extibax inc
              </a>{" "}
              & Licenced by
              <a href="https://opensource.org/licenses/MIT" target="_blank">
                MIT
              </a>
              Web maked by Juan Bedoya (Extibax)
            </div>
            <div className="up" id="up">
              <i className="fas fa-caret-up"></i>
            </div>
            <ul className="social-media">
              <li className="linkedin-l ink">
                <a href="https://www.linkedin.com/in/extibax/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="github-link">
                <a href="https://github.com/Extibax" target="_blank">
                  <i className="fab fa-github-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Portfolio;
