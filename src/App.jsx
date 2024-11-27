
import { NavLink, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeCard from './assets/Component/CardComponent/CoffeCard'
import { useState } from 'react'

function App() {

const loadedCoffee=useLoaderData()
const [cofsees,setCoffees]=useState(loadedCoffee)


  return (
    <>
    
      <h1 className='text-6xl text-purple-600'>Coffee Server Client Serve</h1>
      <p>total number of coffee:{cofsees.length}</p>
      
  <div className='grid grid-cols-2 gap-5 my-6'>
  {
       cofsees.map(coffee=><CoffeCard key={coffee._id} cofsees={cofsees} setCoffees={setCoffees} coffee={coffee}></CoffeCard>)
      }
      <NavLink className="btn btn-primary" to="/addcoffee"> AddCofee</NavLink>
  </div>

    </>
  )
}

export default App
