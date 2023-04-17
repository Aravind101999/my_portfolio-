import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "./profile2.jpeg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h6>
                Hi Everyone, My name is{" "}
                <span className="different">Aravindhan</span> and I am from{" "}
                <span className="different">
                  {" "}
                  Vellore, Tamil Nadu(India)
                </span>
                    I am a highly motivated and ambitious individual with a unique blend of technical and business acumen. 
                    I recently graduated from ANNA University Affilated college, where I earned a B.E in Mechanical Engineering with a 
                {" "}
                <span className="different">
                CGPA of 8.1 out of 10.
                 </span>
              </h6>
              
              <h6>
                In order to stay current in the ever-evolving field of technology, I decided to take my skills to the next level by pursuing a 6-month intensive{" "}<span className="different"> MERN Stack Development course from Guvi IIT Madras</span>
                . Through this program, I have gained hands-on experience with technologies such as MongoDB, Express, React, and Node.js,{" "}
                <span className="different">which enables me to develop modern, responsive web applications.</span> 
                </h6>
                <h6>
                In addition to my technical expertise, I am currently pursuing an {" "}<span className="different">
                MBA from SRM University in online mode, with a specialization in Business Analyst.</span> 
                
                This specialization enables me to approach problem solving with a unique perspective, 
                understanding the business requirements and aligning it with the technical teams to deliver such a holistic ,
                well-rounded and functional product.

                
              </h6>
              <h6>Terms That can describe me apart form Coding :</h6>
              <h6 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Share Marketing Option Trading Technical Analayst{" "}                        
               </h6>
              <h6 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Video Editing{" "}
              </h6>
              <h6 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                SocialMedia Marketing pursuing{" "}
              </h6>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
