export function HouseShow(props) {
  return (
  <div>
     <h2>{props.house.address}</h2>
        <p>Square feet: {props.house.square_ft}</p>
        <p>Bedrooms: {props.house.bedrooms}</p>
        <p>Bathrooms: {props.house.bathrooms}</p> 
        <br /> 
        <form>
          <div>
            Address: <input defaultValue={props.house.address} name="address" type="text"/> 
          </div>
        </form>
  </div>
  );
};