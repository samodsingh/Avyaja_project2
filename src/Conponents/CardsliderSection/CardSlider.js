// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import service_medical_img1 from "../../images/service_medical_img1.jpg";
// import service_family_img2 from "../../images/service_family_img2.jpg";
// import {
//     Col,
//     Row
// } from 'antd';
// import { Pagination, Navigation } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./CardSlider.css";
// import {useState} from "react";

// // import required modules
// import {Autoplay} from "swiper"; 
// export default function CardSlider() {
//   const [size, setsize] = useState (4);
//   const resizefun = () =>{
//     if(window.innerWidth > 700 ){
//       setsize(4);
//     }
//     else{
//       setsize(1);
//     }
//   }
//  window.addEventListener("resize",resizefun)
//   return (

//     <>   
//     <div className="container">
//     <Row justify="center">
//         <Col xs={{ span: 24, offset: 0 }} lg={{ span: 10, offset: 1 }}>
//             <h1 className="blog-title">Avyaja Services Human To Humane!</h1>
//         </Col>
//     </Row>

//       <Swiper
//         slidesPerView={size}
//         spaceBetween={30}
//         slidesPerGroup={1}
//         loop={true}
//         loopFillGroupWithBlank={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[  Pagination, Navigation ,Autoplay]}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         className="mySwiper" id="blogs"
//       >

//         <SwiperSlide>
//                 <div className="card">
//                     <img src={service_medical_img1} alt="card images" />
//                     <div className="card_title">
//                     <span>March 18, 2021</span>
//                      <p>Your Go-To Guide for Volunteering with Seniors.</p>
//                       <a  href="/" className="link_title">See Details</a>
//                     </div>
//                 </div>                     
//         </SwiperSlide>  
//         <SwiperSlide>
//                 <div className="card">
//                     <img src={service_family_img2} alt="card images" />
//                     <div className="card_title">
//                     <span>March 18, 2021</span>
//                      <p>Your Go-To Guide for Volunteering with Seniors.</p>
//                       <a  href="/" className="link_title">See Details</a>
//                     </div>
//                 </div>                     
//         </SwiperSlide>  
//         <SwiperSlide>
//                 <div className="card">
//                     <img src={service_medical_img1} alt="card images" />
//                     <div className="card_title">
//                     <span>March 18, 2021</span>
//                      <p>Your Go-To Guide for Volunteering with Seniors.</p>
//                       <a  href="/" className="link_title">See Details</a>
//                     </div>
//                 </div>                     
//         </SwiperSlide>  
//         <SwiperSlide>
//                 <div className="card">
//                     <img src={service_family_img2} alt="card images" />
//                     <div className="card_title">
//                     <span>March 18, 2021</span>
//                      <p>Your Go-To Guide for Volunteering with Seniors.</p>
//                       <a  href="/" className="link_title">See Details</a>
//                     </div>
//                 </div>                     
//         </SwiperSlide>  
//         <SwiperSlide>
//                 <div className="card">
//                     <img src={service_medical_img1} alt="card images" />
//                     <div className="card_title">
//                     <span>March 18, 2021</span>
//                      <p>Your Go-To Guide for Volunteering with Seniors.</p>
//                       <a  href="/" className="link_title">See Details</a>
//                     </div>
//                 </div>                     
//         </SwiperSlide>   
            
//       </Swiper>
//       </div> 
//     </>
//   );
// }
