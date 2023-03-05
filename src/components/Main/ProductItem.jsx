import { AiFillStar } from "react-icons/ai";


export const ProductItem = ({ product }) => { 

    const { id, productTitle, category, productImg, price, rating } = product;

    return (
        <div className="card" style={{width: '17rem'}}>
            <img src={productImg} className="card-img-top" alt={productTitle} />
            <div className="card-body">
                <p className="card-text">{price} coins</p>
                <h6 className="card-title">{productTitle}</h6>
                <p className="card-text"> <AiFillStar />  {rating} </p>

                <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
        </div>
    
)

}
