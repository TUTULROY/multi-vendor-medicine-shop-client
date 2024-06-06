
import useMenu from "../hook/useMenu";


const Shops = () => {
    const [menu]= useMenu();
    console.log(menu);
    return (
        <div>
            <h2>length</h2>
        </div>
    );
};

export default Shops;