// TODO: create a component that displays a single bakery item

export default function BakeryItem(props)  {
    return (
        <div>
        {props.item.name} 
        <img src = {props.item.image} />
       <button onClick={() => props.cartItems(props.index)}>Add me to cart</button>
        </div>
    )


}