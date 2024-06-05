import { useParams } from "react-router-dom";
import useMenu from "../../../hook/useMenu";


const CategoryDetails = () => {
    const categories = ['Tablet'];
    const [menu] =useMenu();
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const tablet = menu.filter(item => item.category === 'Tablet');
    console.log(tablet)
    return (
        <div>
            <h2>
                hello
            </h2>
        </div>
    );
};

export default CategoryDetails;