import React from "react";
import "./Certificate.css";
import { FaReact, FaAws } from "react-icons/fa";
import {
  SiReact,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiMysql,
  SiBootstrap,
  
} from "react-icons/si";
import { DiCss3, } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript,IoIosLink } from "react-icons/io";

import aws from "./assets/aws.png";
import Mern from "./assets/Mern.png";
import react from "./assets/react.png";
import node from "./assets/node.png";
import mongodb from "./assets/mongodb.png";
import mysql from "./assets/mysql.png";
import javascript from "./assets/javascript.png";
import bootstrap from "./assets/bootstrap.png";
import html from "./assets/html.png";
import css from "./assets/css.png";


export const Certificate = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Certificate</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={aws}
                    alt="aws"
                  />
                </div>
              </div>
              <div className="project_information">
                <h5>GUVI Geek Networks, IITM Research Park</h5>
                <p>
                  AWS Certificate
                  

                </p>
                <div>
                  
                  
                  
                  <FaAws />
                  
                </div>
                <div>
                  <a
                    href="https://www.guvi.in/certificate?id=Z7J61miH406662T79V&download=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      show credential<IoIosLink/>
                    </span>
                  </a>

                </div>
              </div>
            </div>
          </div>

          

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Mern}
                    alt="Mern stack "
                  />
                </div>
              </div>
              <div className="project_information">
              <h5>GUVI Geek Networks, IITM Research Park</h5>
                <p>
                
                 MERN full Stack Developer program 
                </p>
                <div>
                  <SiMongodb/>
                  <SiExpress/>
                  <SiReact/>
                  <SiNodedotjs/>
                  
                  
                </div>
                <div>
                  <a
                    href="https://www.guvi.in/certificate?id=g7467u125069d6yEP6&download=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                    show credential<IoIosLink/>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={react}
                    alt= "react.js"
                  />
                </div>
              </div>
              <div className="project_information">
              <h5>GUVI Geek Networks, IITM Research Park</h5>
                <p>
                React.js certificate 
                </p>
                <div>
                  <SiReact/>
                 </div>
                <div>
                  <a
                    href="https://www.guvi.in/certificate?id=6AS69h947062U7kL1z&download=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                    show credential<IoIosLink/>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={node}
                    alt= "node.js"
                  />
                </div>
              </div>
              <div className="project_information">
              <h5>GUVI Geek Networks, IITM Research Park</h5>
                <p>
                node.js certificate 
                </p>
                <div>
                  
                  
                  <SiNodedotjs/>
                  
                  
                  
                </div>
                <div>
                  <a
                    href="https://www.guvi.in/certificate?id=616S9401n67u9dMr27&download=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                    show credential<IoIosLink/>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
    
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={mongodb}
                    alt= "mongodb"
                  />
                </div>
              </div>
              <div className="project_information">
              <h5>GUVI Geek Networks, IITM Research Park</h5>
                <p>
                mongodb(NoSQL) certificate 
                </p>
                <div>
                  
                  
                  <SiMongodb/>
                  
                  
                  
                </div>
                <div>
                  <a
                    href="https://www.guvi.in/certificate?id=6WgN77664926f04JE1&download=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                    show credential<IoIosLink/>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={mysql}
                    alt= "mysql"
                  />
                </div>
              </div>
              <div className="project_information">
              <h5>GUVI Geek Networks, IITM Research Park</h5>
                <p>
                MySQL certificate 
                </p>
                <div>
                  
                  
                  <SiMysql/>
                  
                  
                  
                </div>
                <div>
                  <a
                    href="https://www.guvi.in/certificate?id=76416R0aybl762h99D&download=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                    show credential<IoIosLink/>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={javascript}
                    alt= "javascript"
                  />
                </div>
              </div>
              <div className="project_information">
              <h5>GUVI Geek Networks, IITM Research Park</h5>
                <p>
                 Javascript certificate 
                </p>
                <div>
                  
                  
                  <IoLogoJavascript/>
                  
                  
                  
                </div>
                <div>
                  <a
                    href="https://www.guvi.in/certificate?id=E60WeaP64N9Lj76217&download=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                    show credential<IoIosLink/>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
   



          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={bootstrap}
                    alt= "bootstrap"
                  />
                </div>
              </div>
              <div className="project_information">
              <h5>GUVI Geek Networks, IITM Research Park</h5>
                <p>
                 Bootstrap certificate 
                </p>
                <div>
                  
                  
                  <SiBootstrap/>
                  
                  
                  
                </div>
                <div>
                  <a
                    href="https://www.guvi.in/certificate?id=0964UcA67B2a1xCi76&download=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                    show credential<IoIosLink/>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>





          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={html}
                    alt= "html5"
                  />
                </div>
              </div>
              <div className="project_information">
              <h5>GUVI Geek Networks, IITM Research Park</h5>
                <p>
                  HTML5 certificate 
                </p>
                <div>
                  
                  
                  <SiHtml5/>
                  
                  
                  
                </div>
                <div>
                  <a
                    href="https://www.guvi.in/certificate?id=f7926v637c00yN7146&download=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                    show credential<IoIosLink/>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>





          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={css}
                    alt= "CSS3"
                  />
                </div>
              </div>
              <div className="project_information">
              <h5>GUVI Geek Networks, IITM Research Park</h5>
                <p>
                  CSS3 certificate 
                </p>
                <div>
                  
                  
                  <DiCss3/>
                  
                  
                  
                </div>
                <div>
                  <a
                    href="https://www.guvi.in/certificate?id=0QY361x6741269M76F&download=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                    show credential<IoIosLink/>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>




          



        </div>
      </div>
      
    </>
  );
};
