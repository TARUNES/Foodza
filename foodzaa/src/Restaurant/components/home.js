// import Restaurants from "./restaurant";
import './home.css'
import RestData from "../Restaurant/RestData";
import Restaurants from "./restaurant";
// import {useLocation} from 'react-router-dom';

function Home() {
  // const location=useLocation()
  return (
    <>
      {/* <h1>Hello {location.state.id} and welcome to the home</h1> */}
      <div className="txt" >
        {RestData.map((restaurant, index) => (
          <Restaurants
            key={index}
            imageUrl={restaurant.imageUrl}
            restname={restaurant.restname}
            Rating={restaurant.Rating}
            price={restaurant.price}
            Area={restaurant.Area}
          />

        ))}
      </div>
    </>
  );
}
export default Home;
