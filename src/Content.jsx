import axios from "axios"; 
import { HousesIndex } from "./HousesIndex"; 
import { useState, useEffect} from "react"; 

export function Content() {
  const [houses, setHouses] = useState([]); 

  const handleIndexHouses = () => {
    axios.get("http://localhost:3000/houses.json").then ((response) => {
      console.log(response.data); 
      setHouses(response.data); 
    });
  };

  useEffect(handleIndexHouses, []); 

  return (
    <div>
     <HousesIndex houses={houses} /> 
    </div>
  )
}