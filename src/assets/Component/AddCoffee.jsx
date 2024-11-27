import { data } from "react-router-dom";

import swal from 'sweetalert';

const AddCoffee = () => {
    const handleAddCoffe=(e)=>{
e.preventDefault()
const form=e.target
const name=form.name.value
const quantity=form.quantity.value
const supplier=form.supplier.value
const taste=form.taste.value
const catagory=form.catagory.value
const details=form.details.value
const photo=form.photo.value
const newCoffee={name,quantity,details,photo,catagory,taste,supplier}
console.log(newCoffee);
//sent data to the server
fetch('http://localhost:3000/coffee',{
method:"POST",
headers:{
    "Content-Type": "application/json",
},
body:JSON.stringify(newCoffee)
})
.then(res=>res.json())
.then(data=>{console.log(data)
    if(data.insertedId){
        swal("sucessfully added");
    }
})

    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-4/5 lg:w-2/3 xl:w-1/2 bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-center mb-4">Add New Coffee</h2>        
            <form onSubmit={handleAddCoffe}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Enter coffee name"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" name="name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Quantity</label>
                  <input 
                  name="quantity"
                    type="number" 
                    placeholder="Enter coffee quantity"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Supplier</label>
                  <input
                  name="supplier"
                    type="text"
                    placeholder="Enter coffee supplier"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Taste</label>
                  <input
                  name="taste"
                    type="text"
                    placeholder="Enter coffee taste"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Category</label>
                  <input
                  name="catagory"
                    type="text"
                    placeholder="Enter coffee category"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Details</label>
                  <input
                  name="details"
                    type="text"
                    placeholder="Enter coffee details"
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Photo</label>
                <input
                name="photo"
                  type="text"
                  placeholder="Enter photo URL"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
          <input type="submit" name="Add Coffee" id="" className="btn btn-primary" />
            </form>
          </div>
        </div>
      );
};

export default AddCoffee;