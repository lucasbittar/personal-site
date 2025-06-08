import React from "react";

const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Gartner (via Toptal)",
    period: "Dec 2023 – Mar 2025",
    startDate: "2023-12-01",
    endDate: "2025-03-31",
    responsibilities: [
      "Worked on an AI chat tool, enhancing it with features like conversation pinning, layout improvements, and code refactoring using React and JavaScript.",
      "Optimized frontend performance, ensuring seamless integration with Gartner’s data-driven platform.",
    ],
  },
  {
    id: 2,
    title: "Senior Frontend Developer",
    company: "Sensentia (via Toptal)",
    period: "Nov 2023 – Sep 2024",
    startDate: "2023-11-01",
    endDate: "2024-09-30",
    responsibilities: [
      "Built an AI-driven healthcare dashboard with React and TypeScript, tailoring plans to individual needs with a focus on accessibility and responsive design.",
    ],
  },
  {
    id: 3,
    title: "Senior Frontend Developer",
    company: "Zobrist (via Toptal)",
    period: "Aug 2020 – Aug 2023",
    startDate: "2020-08-01",
    endDate: "2023-08-31",
    responsibilities: [
      "Architected catalog and product pages for e-commerce websites of The North Face, VANS, and Timberland using their legacy jQuery code.",
      "Participated in agile ceremonies (sprint planning, grooming, demos) to enhance user engagement and team collaboration.",
    ],
  },
  {
    id: 4,
    title: "Senior Frontend Developer",
    company: "BVA (via Toptal)",
    period: "Feb 2019 – Dec 2019",
    startDate: "2019-02-01",
    endDate: "2019-12-31",
    responsibilities: [
      "Translated mockups into functional websites using HTML, CSS, JavaScript, and Liquid, delivering strategic digital solutions.",
      "Created documentation and conducted code reviews, mentoring mid- and associate-level developers to elevate team standards.",
    ],
  },
  {
    id: 5,
    title: "Front-End Developer",
    company: "Movile",
    period: "Jul 2015 – Jun 2016",
    startDate: "2015-07-01",
    endDate: "2016-06-30",
    responsibilities: [
      "Developed a ticketing web platform using AngularJS, ensuring robust performance and user-friendly interfaces.",
    ],
  },
  {
    id: 6,
    title: "Front-End Developer",
    company: "Solvian",
    period: "Oct 2014 – Jul 2015",
    startDate: "2014-10-01",
    endDate: "2015-07-31",
    responsibilities: [
      "Built web interfaces with HTML, CSS/SCSS, JavaScript, jQuery, and RESTful APIs, focusing on seamless integration and functionality.",
    ],
  },
];

function calculateDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const diffTime = end - start;
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  const diffMonths = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
  );

  let duration = "";
  if (diffYears > 0) duration += `${diffYears} year${diffYears > 1 ? "s" : ""}`;
  if (diffMonths > 0)
    duration += `${diffYears > 0 ? " " : ""}${diffMonths} month${diffMonths > 1 ? "s" : ""}`;
  if (!endDate) duration += " (Present)";

  return duration || "Less than a month";
}

const Experience = () => {
  return (
    <div className="section">
      <h2>Experience</h2>
      <ul className="experience-list">
        {experiences.map((experience) => (
          <li className="experience-item" key={experience.id}>
            <div className="experience-header">
              <h3>
                {experience.title} @ <em>{experience.company}</em>
              </h3>
              <p className="experience-duration">
                {experience.period}
                <em>
                  ({calculateDuration(experience.startDate, experience.endDate)}
                  )
                </em>
              </p>
            </div>
            {experience.responsibilities.map((responsibility, index) => (
              <p className="experience-responsibilities" key={index}>
                - {responsibility}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
