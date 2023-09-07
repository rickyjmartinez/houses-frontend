import axios from "axios"; 
import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom"; 


export function HouseShowPage() {
  const [house, setHouse] = useState({})
  const params = useParams();

  const getHouseData = () => {
    console.log(params);
    axios.get(`http://localhost:3000/houses/${params.id}.json`).then(response => {
      console.log(response)
      setHouse(response.data)
    })
  }

  useEffect(getHouseData, [])

  return (
    <div>  
      <h2>{house.address}</h2>
        <p>Square feet: {house.square_ft}</p>
        <p>Bedrooms: {house.bedrooms}</p>
        <p>Bathrooms: {house.bathrooms}</p> 
    
    </div>
  );
}