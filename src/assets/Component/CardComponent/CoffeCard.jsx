import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const CoffeCard = ({coffee,setCoffees,cofsees}) => {
 
    
    const { name,photo,quantity,details,_id } = coffee;
    const handleDelet=(_id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delet this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            
console.log("delet confarm",_id)
fetch(`http://localhost:3000/coffee/${_id}`,{
method:"delete"
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.deletedCount>0){
        Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remainng=cofsees.filter(cof=>cof._id!==_id)
              setCoffees(remainng)
    }
   
})

            }
          });

    }

    return (
        <div className="coffee-card bg-gray-100 p-4 rounded-md shadow-md flex items-center gap-4">
          {/* Coffee Image */}
          <img
            src={photo}
            alt={name}
            className="w-24 h-24 object-cover rounded-md"
          />
          {/* Coffee Details */}
          <div className="coffee-details flex-grow">
            <h2 className="text-lg font-bold mb-1">Name: {name}</h2>
           
            <p className="text-sm font-semibold">Price: {quantity}</p>
            <p className="text-sm font-semibold">details: {details}</p>
            <p className="text-sm font-semibold">Price: {quantity}</p>
          </div>
          {/* Action Buttons */}
          <div className="coffee-actions flex flex-col gap-2">
            <button className="bg-yellow-400 p-2 rounded-md shadow-sm">
           
            <FaRegEye />
            </button>
            <NavLink to={`/updatecoffee/${_id}`} className="bg-gray-700 text-white p-2 rounded-md shadow-sm">
            <CiEdit />
            </NavLink>
            <button onClick={()=>handleDelet(_id)} className="bg-red-500 text-white p-2 rounded-md shadow-sm">
            <MdDelete />
            </button>
          </div>
        </div>
      );
    };


export default CoffeCard;