import { Link } from "react-router-dom";


const CategoryCard = ({item}) => {
    const {category_name, image_url, number_of_medicines} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image_url} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{category_name}</h2>
    <p>{number_of_medicines}</p>
    <div className="card-actions">
      <Link to={`categoryDetails/${category_name}`}>
      <button className="btn btn-primary">{category_name}</button>
      </Link>
     
    </div>
  </div>
</div>
            
    );
};

export default CategoryCard;