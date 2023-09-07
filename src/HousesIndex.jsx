export function HousesIndex(props) {
  return(
    <div>
      <h1>all houses</h1>
      {props.houses.map((house) => (
        <div key={house.id}> 
        <h2>{house.address}</h2>
        <p>Square feet: {house.square_ft}</p>
        <p>Bedrooms: {house.bedrooms}</p>
        <p>Bathrooms: {house.bathrooms}</p>
        </div>
      ))}

    </div>
  )
}