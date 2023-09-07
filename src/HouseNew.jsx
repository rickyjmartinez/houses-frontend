export function HouseNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const params = new FormData(event.target); 
    props.onCreateHouse(params, () => event.target.reset()); 
  }; 


  return (
    <div>
      <h1>New House</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Address: <input name="address" type="text" /> 
        </div>
        <div>
          Square Feet: <input name="square_ft" type="text" /> 
        </div>
        <div>
          Bedrooms: <input name="bedrooms" type="integer" /> 
        </div>
        <div>
          Bathrooms: <input name="bathrooms" type="integer" /> 
        </div>
        <button type="submit">Create house</button>
      </form>
    </div>
  )
}