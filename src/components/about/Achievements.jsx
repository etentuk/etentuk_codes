import React from "react";

const achievementsContent = [
  { title: "03", subTitle1: "years of", subTitle2: "Experience" },
  {
    title: "CS50",
    subTitle1: "Web Programming with Python and JavaScript",
    subTitle2: "Certificate",
  },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">
              {val.title === "CS50" ? (
                <a
                  href="https://certificates.cs50.io/9ad45db4-b0fb-434d-83ef-53d8133c4e52.pdf?size=letter"
                  target="_blank"
                >
                  {val.title}
                </a>
              ) : (
                val.title
              )}
            </h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
