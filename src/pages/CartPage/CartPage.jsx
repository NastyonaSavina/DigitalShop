import { useSelector } from "react-redux"
import { selectCartItems } from "redux/Cart/cart.selectors";


const CartPage = () => {

    const itemsInCart = useSelector(selectCartItems);
    

    return (
        <>
            {itemsInCart.length === 0 ? (<p>Let's add something here!</p>) : (
                <ul className='d-flex grid gap-3 p-0' style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                    {itemsInCart.map(product => (
                          <li  key={product.id} className="list-group-item"  >An item</li>)
                     
                   
                    )}
            
                </ul>
            )
            }
        </>
        
    )
}

export default CartPage;