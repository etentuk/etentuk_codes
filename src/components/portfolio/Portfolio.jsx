import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-modal";
import ModalOne from "./modal/ModalOne";

Modal.setAppElement("#root");

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  var settings = {
    dots: false,
    arrow: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="portfolio_inner">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>
          <li>
            <div className="list_inner" onClick={toggleModalOne}>
              <div className="image">
                <img
                  src="img/portfolio/buggington.png"
                  data-tip
                  data-for="product"
                  alt="skills"
                />
                <ReactTooltip
                  id="product"
                  place="bottom"
                  type="light"
                  effect="float"
                  className="tooltip-wrapper"
                >
                  <div>
                    <h5>Buggington</h5>
                    <span>It's a bugs life</span>
                  </div>
                </ReactTooltip>
              </div>
            </div>
          </li>
          {/* End li */}
        </Slider>
      </ul>

      {/* Start Modal Motion Graphy */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap ">
              <ModalOne />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Motion Graphy */}
    </div>
  );
};

export default Portfolio;
