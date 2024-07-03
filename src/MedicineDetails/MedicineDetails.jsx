import { useParams } from "react-router-dom";
import useDetails from "../hook/useDetails";


const MedicineDetails = () => {
    const {id} = useParams();
    const [item] = useDetails(id);
    const {item_name, short_description, item_generic_name, image, category, company, mass_unit, per_unit_price, discount_percentage} = item;
    console.log(item);
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img src={image} alt="Album"/></figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold text-center">Medicine Name: {item_name}</h2>
          <p className="text-xl">{short_description}</p>
          <p className="text-xl font-bold">Generic Name:{item_generic_name}</p>
          <p className="text-2xl">Category: {category}</p>
          <p><span className="text-2xl font-bold">Company:</span> <span className="text-xl">
          {company}
            </span></p>
          <p className="text-xl">Mess Unit: {mass_unit}</p>
          <p><span className="text-xl font-semibold">Price: </span>${per_unit_price}</p>
          <p><span className="text-xl font-semibold">Discount: </span>{discount_percentage}%</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Home</button>
          </div>
        </div>
      </div>
    );
};

export default MedicineDetails;