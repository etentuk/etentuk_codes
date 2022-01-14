import React from "react";
import Tilt from "react-parallax-tilt";
import { SiDjango, SiPython, SiReact, SiTypescript } from "react-icons/all";

const Service = () => {
  return (
    <div className="service_list">
      <ul>
        {/* Start Service Motion & Web Graphy */}
        <li data-aos="fade-right" data-aos-duration="1200">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <img
                  className="svg custom"
                  src="img/service/frontend_skills.png"
                  alt=""
                />
                <div className="service_title">
                  <h3>
                    HTML, CSS <br /> & JavaScript
                  </h3>
                  <p>
                    I use HTML, CSS and JavaScript to build responsive frontends
                    for websites.
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End Service Motion & Web Graphy */}

        {/* Start Service Ui/Ux Consultancy */}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <SiTypescript className="svg" />
                {/*<img className="svg custom" src="img/svg/2.svg" alt="" />*/}
                <div className="service_title">
                  <h3>TypeScript</h3>
                  <p>
                    With TypeScript I am able to avoid errors that would
                    normally occur during runtime while compiling.
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End Service Ui/Ux Consultancy */}

        {/* Start Skill React.JS */}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <SiReact className="svg" />
                <div className="service_title">
                  <h3>React.JS</h3>
                  <p>
                    I utilize the React framework to build both web and Cross
                    Platform Mobile Applications.
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End Skill React.JS */}

        {/*/!* Start Service Branding & Design *!/*/}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <SiPython className={"svg"} />
                <div className="service_title">
                  <h3>Python</h3>
                  <p>
                    I use Python on a daily basis to manipulate data on the
                    server.
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/*/!* End Service Branding & Design *!/*/}

        {/* Start Service Branding & Design */}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <SiDjango className={"svg"} />
                <div className="service_title">
                  <h3>Django</h3>
                  <p>
                    I use the Django framework to build backend applications
                    accessible through Rest API's.
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End Service Branding & Design */}
      </ul>
    </div>
  );
};

export default Service;
