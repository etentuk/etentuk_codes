import React from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Modal.setAppElement("#root");

const Blog = () => {
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
          speed: 300,
          draggable: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="news_inner my_carousel">
        <ul>
          <Slider {...settings}>
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                <a
                  style={{ textDecoration: "inherit", color: "white" }}
                  target="_blank"
                  href="https://medium.com/@etentuke/django-rest-framework-how-to-edit-reset-password-link-in-dj-rest-auth-with-dj-allauth-installed-c54bae36504e"
                >
                  <div className="image">
                    <img src="/img/password-reset.jpeg" alt="thumb" />

                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/password-reset.jepg"
                        })`,
                      }}
                    />
                  </div>
                </a>

                {/* End image */}

                <div className="news_details">
                  <span>
                    April 07,2021 <a href="#">Design</a>
                  </span>
                  <h3 className="title">
                    <a
                      style={{ textDecoration: "inherit", color: "white" }}
                      target="_blank"
                      href="https://medium.com/@etentuke/django-rest-framework-how-to-edit-reset-password-link-in-dj-rest-auth-with-dj-allauth-installed-c54bae36504e"
                    >
                      Django Rest Framework — How to Edit Reset Password Link in
                      Dj-Rest-Auth with Dj-AllAuth installed.
                    </a>
                  </h3>
                </div>
                {/* End details */}
              </div>
            </li>
            {/* End single blog One */}
          </Slider>
        </ul>
      </div>
    </>
  );
};

export default Blog;
