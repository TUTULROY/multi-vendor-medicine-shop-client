import useDetails from "../hook/useDetails";


const MedicineDetails = () => {
    
    const [item] = useDetails();
    const {item_name, short_description} = item;
    
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content">
    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{item_name}</h1>
      <p className="py-6">{short_description}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default MedicineDetails;