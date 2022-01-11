import React from "react";

const experienceContent = [
  {
    year: "   2020 - Present",
    position: "Monitoring Engineer",
    compnayName: "ExxonMobil",
    details: `Development of monitoring solutions in an effort to give visibility into the health and performance of applications and infrastructure in an effort to reduce Mean Time to Resolution of issues.`,
  },
  {
    year: "   2017 - 2020",
    position: "Technical Client Support Agent",
    compnayName: "Transcosmos Kft",
    details:
      "Provision of technical assistance to customers facing difficulties using the client products.",
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/briefcase.png" alt="icon" />
            <i className="fa fa-briefcase" />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
