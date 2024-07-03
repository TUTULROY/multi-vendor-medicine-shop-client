import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import DiscountProducts from "../DiscountProducts/DiscountProducts";
import HeroSection from "../HeroSection/HeroSection";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Multi-vendor Medicine || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <DiscountProducts></DiscountProducts>
            <HeroSection></HeroSection>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;