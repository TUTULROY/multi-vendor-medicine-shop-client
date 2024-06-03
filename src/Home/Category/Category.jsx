import useCategory from "../../hook/useCategory";
import CategoryCard from "./CategoryCard";


const Category = () => {
    const [category]= useCategory();
    return (
        <div className="grid md:grid-cols-3 gap-4 my-4">
            {
                category.map(item => <CategoryCard key={item._id} item={item}></CategoryCard>)
            }
        </div>
    );
};

export default Category;