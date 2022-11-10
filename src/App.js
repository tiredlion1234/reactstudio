import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setcart] = useState({});

  const updatecart = (uid) =>{
    let newcart = cart;
    if (newcart[uid]){
        newcart[uid] += 1
    }else{
        newcart[uid] = 1
    }
    setcart({...newcart});
}




  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
      
        <BakeryItem cartItems = {updatecart} item = {item} index = {index} />
      ))}

      <div>
        <h2>Cart</h2>
        {Object.keys(cart).map((id) => {
          return (<div>{bakeryData[id].name}  Count : {cart[id]} Price Total:${bakeryData[id].price*cart[id]}</div>)
        })}
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
