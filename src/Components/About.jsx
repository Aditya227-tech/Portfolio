/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
//import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a Frontent Developer, currently persuing BTech, in Electronics and Communication Engineering, at SRM Institute of Science and Technology, Ramapuram, Chennai. I am Extremely Passionate about simple and useful User Interfaces for Web Application, as well as developing Native Applications as well.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "Web Developer",
  "Web Application Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a passionate and dedicated Frontend Developer, I aim to continuously enhance my expertise in web application development by staying updated with evolving technologies and industry best practices. My goal is to create innovative, scalable, and user.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img
        className="background"
        src="https://tse4.mm.bing.net/th?id=OIP.MlX13Mmftu-hSuxkKH9UDAHaEK&pid=Api&P=0&h=180"
        alt={imageAltText}
      />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;