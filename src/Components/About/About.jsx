import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import InstagramIcon from "@material-ui/icons/Instagram";
import DescriptionIcon from "@material-ui/icons/Description";

import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";


// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
      

        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Aravindhan B</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        You can discuss with me about above things
        
        A highly passionate and creative Full Stack Developer with expertise in the MERN Stack, 
        armed with a diverse set of tools and technologies,creating interactive single page applications and 
        Knowledgeable in a wide range of programming languages
         and always eager to learn and explore new ones
          </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Aravind101999"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:aravindbala101@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:6383085644"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/aravindhan-b-08a126220"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/__mr_calm__/"
            aria-label="Instagram"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1jEOXVaUVEUmnotyKuIabJHOGVrs3P8hd/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};

