import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";

import image1 from "../../../assets/banner/banner (1).jpg";
import image2 from "../../../assets/banner/banner (2).jpg";
import image3 from "../../../assets/banner/banner.jpg";
import image4 from "../../../assets/banner/banner (4).jpg";
import BannerTitle from "../../../Components/BannerTitle/BannerTitle";

const Banner = () => {
   return (
      <div className="md:h-[95vh] h-fit">
         <Swiper
            spaceBetween={40}
            centeredSlides={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            <div>
               <SwiperSlide>
                  <div>
                     <img className="h-[90vh]" src={image1} alt="" />
                     <BannerTitle
                        heading={"Discover the World Through the Lens"}
                        subHeading={
                           "Embark on a Transformative Journey through the Captivating Realms of Photography and Unlock the Power to Capture Timeless Stories with Creativity and Precision"
                        }></BannerTitle>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>
                     <img className="h-[90vh]" src={image2} alt="" />
                     <BannerTitle
                        heading={"Join a Community of Photography Enthusiasts"}
                        subHeading={
                           "Join a Vibrant Community of Passionate Photographers, Where the Pursuit of Excellence and the Celebration of Artistic Expression Merge, Nurturing Growth, Inspiration, and Lifelong Connections"
                        }></BannerTitle>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>
                     <img className="h-[90vh]" src={image3} alt="" />
                     <BannerTitle
                        heading={
                           "Unlocking the Secrets of Extraordinary Photography"
                        }
                        subHeading={
                           "Unleash Your Creative Vision and Immerse Yourself in a Photographic Odyssey, Discovering the Mesmerizing Interplay of Colors, Textures, and Emotions That Elevate Your Images to New Heights"
                        }></BannerTitle>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>
                     <img className="h-[90vh]" src={image4} alt="" />
                     <BannerTitle
                        heading={"Master the Art of Capturing Memories"}
                        subHeading={
                           "Uncover the Secrets of Photographic Alchemy, Harnessing the Power of Technical Skill, Artistic Sensibility, and Intuitive Vision to Create Images"
                        }></BannerTitle>
                  </div>
               </SwiperSlide>
            </div>
         </Swiper>
      </div>
   );
};

export default Banner;
