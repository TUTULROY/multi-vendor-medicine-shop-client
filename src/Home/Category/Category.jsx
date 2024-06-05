import { Link } from "react-router-dom";
import SectionTitle from "../../SectionTitle/SectionTitle";
import useCategory from "../../hook/useCategory";
import CategoryCard from "./CategoryCard";


const Category = () => {
    const [category]= useCategory();
    return (
        <div>
            <SectionTitle subHeading={"Medicine is the field of health and healing. It includes nurses, doctors, and various specialists. It covers diagnosis, treatment, and prevention of disease, medical research, and many other aspects of health."}
                            heading={"ALL OF MEDICINE CATEGORY"}>

            </SectionTitle>
        <div className="grid md:grid-cols-3 gap-4 my-4">
            {
                category.map(item => <CategoryCard key={item._id} item={item}></CategoryCard>)
            }
        </div>
        <div className="text-center my-3">
             <Link to="/categoryDetails"><button className="btn btn-outline border-0 border-b-4 mt-4 ">View Full Now</button></Link>
             </div>
        </div>
    );
};

export default Category;