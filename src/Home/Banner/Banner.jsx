import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/medicine2.jpg'
import img2 from '../../assets/pexels-pixabay-159211.jpg'
import img3 from '../../assets/pexels-pixabay-161449.jpg'
import img4 from '../../assets/pexels-pixabay-208541.jpg'

const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={img1} />
            
        </div>
        <div>
            <img src={img2} />
            
        </div>
        <div>
            <img src={img3} />
        </div>
        <div>
            <img src={img4} />
        </div>
    </Carousel>
    );
};

export default Banner;