import { useParams } from "react-router-dom";
import useMenu from "../../../hook/useMenu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";


const CategoryDetails = () => {
    const categories = ['Tablet', 'Syrup', 'Capsule', 'Injection', 'Saline', 'Cream'];
    const [menu] =useMenu();
    console.log(menu)
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const tablet = menu.filter(item => item.category === 'Tablet');
    const syrup = menu.filter(item => item.category === 'Syrup');
    const capsule = menu.filter(item => item.category === 'Capsule');
    const injection = menu.filter(item => item.category === 'Injection');
    const saline = menu.filter(item => item.category === 'Saline');
    const cream = menu.filter(item => item.category === 'Cream');
   
    const handleSearch = e =>{
      e.preventDefault();
      const searchText= e.target.search.value;
      console.log(searchText);
      
  }
    return (
        <div className="py-4">
          <div className="text-center">
            <form onSubmit={handleSearch}>
                <input className="input input-bordered" type="text" name="search" />
                <input className="btn btn-outline" type="submit" value="Search" />
            </form>
            </div>
           
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
            <Tab>Tablet</Tab>
            <Tab>Syrup</Tab>
            <Tab>Capsule</Tab>
            <Tab>Injection</Tab>
            <Tab>Saline</Tab>
            <Tab>Cream</Tab>
            </TabList>

            <TabPanel>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Item Name</th>
        <th>Item Generic Name</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {
        tablet.map((item, index) => <tr key={item._id}>
            <th>{index}</th>
            <td>{item.item_name}</td>
            <td>{item.item_generic_name}</td>
            <td>{item.category}</td>
          </tr>)
      }
      
    
    </tbody>
  </table>
</div>
            </TabPanel>
            <TabPanel>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
    <tr>
        <th>#</th>
        <th>Item Name</th>
        <th>Item Generic Name</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {
        syrup.map(item => <tr key={item._id}>
            <th>1</th>
            <td>{item.item_name}</td>
            <td>{item.item_generic_name}</td>
            <td>{item.category}</td>
          </tr>)
      }
      
    
    </tbody>
  </table>
</div>
            </TabPanel>
            <TabPanel>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
    <tr>
        <th>#</th>
        <th>Item Name</th>
        <th>Item Generic Name</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {
        capsule.map(item => <tr key={item._id}>
            <th>1</th>
            <td>{item.item_name}</td>
            <td>{item.item_generic_name}</td>
            <td>{item.category}</td>
          </tr>)
      }
      
    
    </tbody>
  </table>
</div>
            </TabPanel>
            <TabPanel>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
    <tr>
        <th>#</th>
        <th>Item Name</th>
        <th>Item Generic Name</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {
        injection.map(item => <tr key={item._id}>
            <th>1</th>
            <td>{item.item_name}</td>
            <td>{item.item_generic_name}</td>
            <td>{item.category}</td>
          </tr>)
      }
      
    
    </tbody>
  </table>
</div>
            </TabPanel>
            <TabPanel>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
    <tr>
        <th>#</th>
        <th>Item Name</th>
        <th>Item Generic Name</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {
        saline.map(item => <tr key={item._id}>
            <th>1</th>
            <td>{item.item_name}</td>
            <td>{item.item_generic_name}</td>
            <td>{item.category}</td>
          </tr>)
      }
      
    
    </tbody>
  </table>
</div>
            </TabPanel>
            <TabPanel>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
    <tr>
        <th>#</th>
        <th>Item Name</th>
        <th>Item Generic Name</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {
        cream.map(item => <tr key={item._id}>
            <th>1</th>
            <td>{item.item_name}</td>
            <td>{item.item_generic_name}</td>
            <td>{item.category}</td>
          </tr>)
      }
      
    
    </tbody>
  </table>
</div>
            </TabPanel>
        
           
        </Tabs>
        </div>
    );
};

export default CategoryDetails;