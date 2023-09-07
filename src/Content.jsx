import axios from "axios"; 
import { useState, useEffect} from "react"; 
import { Routes, Route } from "react-router-dom"; 
import { HousesIndex } from "./HousesIndex"; 
import { HouseNew } from "./HouseNew"; 
import { HouseShowPage } from "./HouseShowPage";
import { Modal } from "./Modal";
import { HouseShow } from "./HouseShow"; 


export function Content() {
  const [houses, setHouses] = useState([]); 
  const [isHouseShowVisible, setIsHouseShowVisible] = useState(false);
  const [currentHouse, setCurrentHouse] = useState({});

  const handleIndexHouses = () => {
    axios.get("http://localhost:3000/houses.json").then ((response) => {
      console.log(response.data); 
      setHouses(response.data); 
    });
  };

  const handleCreateHouse = (params, successCallback) => {
    console.log("handleCreateHouse", params); 
    axios.post("http://localhost:3000/houses.json", params).then ((response) => {
      setHouses([...houses, response.data]); 
      successCallback(); 
    }); 
  }

  const handleShowHouse = (house) => {
    console.log("handleShowHouse", house); 
    setIsHouseShowVisible(true); 
    setCurrentHouse(house); 
  ;}

  const handleClose = () => {
    setIsHouseShowVisible(false); 
  }

  useEffect(handleIndexHouses, []); 

  return (
    <div>
      <Routes>
        <Route path="/houses/:id" element={<HouseShowPage />} />
      </Routes>
      <HouseNew onCreateHouse={handleCreateHouse}/> 
     <HousesIndex houses={houses} onShowHouse={handleShowHouse} /> 
     <Modal show={isHouseShowVisible} onClose={handleClose}>
      <HouseShow house={currentHouse} />
     </Modal>
    </div>
  )
}