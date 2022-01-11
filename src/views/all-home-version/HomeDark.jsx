import React from "react";
import Sidebar from "../../components/header/Sidebar";
import Hero from "../../components/slider/Hero";
import About from "../../components/about/About";
import Service from "../../components/service/Service";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Address from "../../components/Address";
import Map from "../../components/Map";
// import AnimatedCursor from "react-animated-cursor";

const HomeDark = () => {
  document.body.classList.add("dark");
  return (
    <div className="home-light edina_tm_mainpart">
      {/*<AnimatedCursor*/}
      {/*  innerSize={8}*/}
      {/*  outerSize={44}*/}
      {/*  color="221, 221, 221"*/}
      {/*  outerAlpha={0.3}*/}
      {/*  innerScale={0.7}*/}
      {/*  outerScale={1.4}*/}
      {/*/>*/}
      <Sidebar />
      {/* End Header */}
      <Hero />
      {/* End Hero */}
      <About />
      {/* End Hero */}
      <div className="edina_tm_services" id="skills">
        <div className="container">
          <div className="edina_tm_title">
            <h3>My Skills</h3>
            <p>
              I am detail oriented and analytical in nature. I utilize
              TypeScript with React to create functional applications. My core
              skills are highlighted below.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Service />
        </div>
      </div>
      {/* End Services */}
      <div className="edina_tm_portfolio" id="projects">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Projects</h3>
            <p>
              The projects below are fully functional projects which show what I
              can bring to your project or team. They are built to demonstrate
              my abilities in frontend, security and backend development as well
              as my growth within the world of software development. All these
              projects have a short about section which gives you more details
              allowing you to demo easily. Contact me for a complete code walk
              through.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Portfolio />
        </div>
      </div>
      <div className="edina_tm_news" id="blog">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Blog</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Blog />
        </div>
      </div>
      {/* End Blog */}
      <div className="edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
            <p>
              I am available for freelance projects or new developer roles.
              Contact me and let's work together!
            </p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  I'm always open to discussing about development or
                  partnerships
                </p>
              </div>
              {/* End title */}
              <div className="fields">
                <Contact />
              </div>
              {/* End Contact Form */}
            </div>
            {/*<div*/}
            {/*  className="right"*/}
            {/*  data-aos="fade-right"*/}
            {/*  data-aos-duration="1200"*/}
            {/*  data-aos-delay="400"*/}
            {/*>*/}
            {/*  <Map />*/}
            {/*</div>*/}
            {/* End Map */}
          </div>
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default HomeDark;
