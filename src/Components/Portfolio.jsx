/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
//import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Home Food Recepie React App",
    description:
      "This project is about creating a Home Food Recipie React app, created with the help oh Node.js and React.js.",
    url: "https://github.com/Aditya227-tech/Home-Food-Recipie-React-app",
  },
  {
    title: "Headset  Online Store Web App",
    description:
      "This project is about a Headset Store Website, created with the help of Node.js, React.js, Next.js, Stripe.",
    url: "https://github.com/Aditya227-tech/Headset-Store-Website.com",
  },
  {
    title: "Car  Online Rental Web Application ",
    description:
      "This project is about an Online Car Rental Web Application created using Node.js React.js.",
    url: "https://github.com/Aditya227-tech/Car-Rental-Website-React",
  },
  {
    title: "Audio Cutter Web App",
    description:
      "An Audio Cutter and Audio Trimmer Web Application, made using React.js, Node.js, Next.js.",
    url: "https://github.com/Aditya227-tech/priceless-beaver-2whlls",
  },

  {
    title: "WebToon App",
    description: "A Manga Reader Native Application, made using React Native",
    url: "https://github.com/Aditya227-tech/WebtoonApp",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg"
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
