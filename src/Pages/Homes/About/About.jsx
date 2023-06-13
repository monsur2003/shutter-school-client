import React from "react";
import "./About.css";
import image from "../../../assets/banner/about.jpg";
import Title from "../../../Components/Title/Title";
import Fade from "react-reveal/Fade";

const About = () => {
   return (
      <div>
         <Title
            heading={"about us"}
            subHeading={"You know about our projects"}></Title>
         <div className="about flex flex-col md:flex-row md:justify-center  md:items-center  ">
            <div className="flex flex-col md:flex-row md:w-[90%] ">
               <Fade left duration={1500}>
                  <div>
                     <img
                        className="md:w-[90%]  rounded-lg"
                        src={image}
                        alt=""
                     />
                  </div>
               </Fade>
               <Fade right cascade duration={1500}>
                  <div className=" text-center mt-8 md:mt-2 md:text-start">
                     <h1 className="md:text-5xl text-3xl my-4 font-bold uppercase">
                        Exploring the World of Photography
                     </h1>
                     <p>
                        We pride ourselves on our attention to detail,
                        meticulous composition, and the ability to connect with
                        our clients on a personal level. Understanding your
                        vision and desires <br />
                        allows us to tailor our approach, ensuring that each
                        photograph reflects your unique story. We believe that{" "}
                        <br />
                        collaboration is key, and we work closely with our
                        clients to bring their vision to life. Lorem ipsum dolor
                        sit, amet consectetur adipisicing elit. Doloremque
                        expedita esse <br />
                     </p>

                     <button className="btn btn-primary my-5">
                        Learn More
                     </button>
                  </div>
               </Fade>
            </div>
         </div>
      </div>
   );
};

export default About;
