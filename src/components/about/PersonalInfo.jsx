import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Emmanuel " },
  { meta: "last name", metaInfo: "Etentuk" },
  { meta: "Age", metaInfo: "23 Years" },
  { meta: "Nationality", metaInfo: "Nigerian" },
  { meta: "Address", metaInfo: "Budapest" },
  { meta: "Email", metaInfo: "etentuke@gmail.com" },
  { meta: "languages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
