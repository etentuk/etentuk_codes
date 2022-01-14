import React from "react";
import Sidebar from "../../components/header/Sidebar";
import Hero from "../../components/slider/Hero";
import About from "../../components/about/About";
import Service from "../../components/service/Service";
import Portfolio from "../../components/portfolio/Portfolio";
import Blog from "../../components/blog/Blog";
import Address from "../../components/Address";

const HomeDark = () => {
  document.body.classList.add("dark");
  return (
    <div className="home-light edina_tm_mainpart">
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
              my abilities in frontend and backend development. All these
              projects have a short about section which gives you more details
              allowing you to demo easily. Contact me for a complete code walk
              through.
            </p>
            <p>
              In my{" "}
              <a target="_blank" href="https://github.com/etentuk">
                github
              </a>{" "}
              you can find other many other projects which were not hosted.
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
              While programming I come across various challenges, I try my best
              to write about these challenges to help the next person after me
              as those before me have always done.
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
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default HomeDark;
