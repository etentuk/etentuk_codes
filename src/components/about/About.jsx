import React, { useState } from "react";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>About Me</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                Hi, I'm <span>Emmanuel Etentuk</span>
              </h3>
              <p>
                I am a developer based in Hungary and I have been building web
                and mobile applications for years now. I provide value by
                translating business requirements into working applications
                while keeping the vision and goals of the business streamlined
                with all decision making processes. I am able to break down
                things analytically which helps me plan and prioritise tasks
                efficiently.
              </p>
            </div>
            <div className="my_skills">
              <div className="edina_tm_button">
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  More About Me
                </button>
              </div>
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <img src="img/thumbs/26-35.jpg" alt="thumb" />
              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "img/about/3.jpeg"
                  })`,
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              />

              <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>3+ Years</h3>
                  <span>Of Experiance</span>
                </div>
              </div>
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>

      {/* Start About Details Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;
