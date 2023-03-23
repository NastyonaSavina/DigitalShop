import { useState } from "react";
import { useSelector } from "react-redux"
import { selectCartItems } from "redux/Cart/cart.selectors";


const CartPage = () => {
    const [quantity, setQuantity] = useState(1);

    const itemsInCart = useSelector(selectCartItems);
    
    console.log(itemsInCart);

    return (
        <>
            
            <h3 className="px-3" style={{ marginRight: 'auto', marginLeft: 'auto', width:900 }}>Your Cart</h3>
           <div className="d-flex flex-row  px-3 justify-content-between" style={{ marginRight: 'auto', marginLeft: 'auto', width:900 }}>
                <div className="p-2 fs-5 fw-bold" style={{ width: 430 }}>Products</div>
                <div className="p-2 fs-5 fw-bold" style={{ width: 70 }}>Price</div>
                <div className="p-2 fs-5 fw-bold" style={{ width: 106 }}>Quantity</div>
                <div className="p-2 fs-5 fw-bold" style={{ width: 70 }}>Total</div>

            </div>
            {itemsInCart.length === 0 ? (<p>Let's add something here!</p>) : (
                <ul className='d-flex  p-0 list-group' style={{ marginRight: 'auto', marginLeft: 'auto', width:900 }}>
                    {itemsInCart.map(product => (
                        <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center"  >
                            <div className="d-flex grid gap-4">
                                <img src={product.productImg} className="rounded" style={{ width: 60 }} alt={product.productTitle} />
                                <p  className="m-0" style={{ width: 350 }}>{product.productTitle}</p>
                            </div>
                            
                            <span className="badge bg-secondary " style={{ width: 70 }}>{product.price}</span>
                            <div className="d-flex grid gap-2">
                                <button className=" rounded border border-0" style={{ width: 30 }} >-</button>
                                <p  className="bg-primary badge rounded-pill m-0 p-2" style={{ width: 30 }}>1</p>
                                <button className="btn-outline-primary rounded  border border-0" style={{ width: 30 }} >+</button>
                            </div>
                            
                            <span  className="ps-4 m-0 badge bg-primary rounded-pill" style={{ width: 70 }}>{product.price*1}</span>
                        </li>)
                     
            
                   
                    )}
            
                </ul>
            )
            }
        </>
        
    )
}

export default CartPage;