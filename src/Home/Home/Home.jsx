import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Multi-vendor Medicine || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;