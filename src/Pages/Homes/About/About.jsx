import React from "react";
import "./About.css";
import image from "../../../assets/banner/about.jpg";
import Title from "../../../Components/Title/Title";

const About = () => {
   return (
      <div>
         <Title
            heading={"about us"}
            subHeading={"You know about our projects"}></Title>
         <div className="about flex md:justify-center  md:items-center  ">
            <div className="md:flex md:w-[90%] ">
               <div>
                  <img className="md:w-[90%] rounded-lg" src={image} alt="" />
               </div>
               <div className=" text-center mt-8 md:mt-2 md:text-start">
                  <h1 className="md:text-5xl text-3xl my-4 font-bold uppercase">
                     ABout us
                  </h1>
                  <p>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Enim quasi expedita at maxime tempora repudiandae, illo
                     quia repellat qui nihil amet dignissimos, <br /> magni eius
                     natus quae eum, quibusdam minus? Magnam, quaerat! Quo
                     consectetur aliquam, consequuntur magni molestiae aliquid?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                     <br />
                     Praesentium provident aut libero maiores at accusantium
                     voluptas corporis tempora asperiores eos voluptatum enim
                     quidem doloremque dolores, error numquam illo odit, magni
                     neque delectus sapiente! A eius esse dolor amet animi id.
                  </p>

                  <button className="btn btn-primary my-5">Learn More</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
