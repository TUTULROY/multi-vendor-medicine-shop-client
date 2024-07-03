import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import SectionTitle from "../../SectionTitle/SectionTitle";
import img1 from '../../assets/34412_1.jpg'
import img2 from '../../assets/61gKnkIY7CL.jpg'
import img3 from '../../assets/images (12).jpeg'
import img4 from '../../assets/images (3).jpeg'
import img5 from '../../assets/images (9).jpeg'
import img6 from '../../assets/istockphoto-186607295-612x612.jpg'


const DiscountProducts = () => {
    return (
        <section>
        <SectionTitle  heading={"Discount Product"}>

        </SectionTitle>
         <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className='text-3xl text-center -mt-16 uppercase text-white'>Cream</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} alt="" />
        <h3 className='text-3xl text-center -mt-16 uppercase text-white'>Syrup</h3>
            </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" />
        <h3 className='text-3xl text-center -mt-16 uppercase text-black'>Cream</h3>
            </SwiperSlide>
        <SwiperSlide>
        <img src={img4} alt="" />
        <h3 className='text-3xl text-center -mt-16 uppercase text-white'>Syrup</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img5} alt="" />
        <h3 className='text-3xl text-center -mt-16 uppercase text-white'>Syrup</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img6} alt="" />
        <h3 className='text-3xl text-center -mt-16 uppercase text-white'>Syrup</h3>
        </SwiperSlide>
        
      </Swiper>
       </section>
    );
};

export default DiscountProducts;