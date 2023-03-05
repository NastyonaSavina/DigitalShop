
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from "redux/selectors";

import { ProductItem } from "./ProductItem";

import { FcGenericSortingAsc } from "react-icons/fc";
import { FcGenericSortingDesc } from "react-icons/fc";
import { AiOutlineStar } from "react-icons/ai";
import { VscListSelection } from "react-icons/vsc";
import { useEffect } from 'react';
import { fetchProductCards } from 'redux/ProductCards/ProductCards.operations';


export const ProductsGallery = () => {
    
    const filteredProducts = useSelector(selectProducts);
    const dispatch = useDispatch();



    useEffect(() => {
      dispatch(fetchProductCards());
    }, [dispatch]);

    return (

        <>
            <div className="p-3 d-flex  justify-content-between rounded bg-primary bg-opacity-25 mb-3"  >
                <div>
                    <button type= "button" className="btn btn-outline-primary position-relative"><VscListSelection /> Catalog </button>
                </div>
                <div className="d-flex flex-row grid gap-4 align-items-baseline ">
                    <p>sorting by price</p>
                    <button type="button" className="btn btn-outline-primary position-relative"><FcGenericSortingAsc /></button>
                    <button type="button" className="btn btn-outline-primary position-relative"><FcGenericSortingDesc /></button>
                    <p >sorting by popularity</p>
                    <button type="button" className="btn btn-outline-primary position-relative"><AiOutlineStar /></button>
                </div>
            </div>
       
            {filteredProducts.length === 0 ? (<p>Let's add something here!</p>) : (
                 <ul className='d-flex flex-wrap grid gap-2 p-0'>
                    {filteredProducts.map(product => (
                        <ProductItem key={product.id} product={product} />
                    )               
                    )}
            
                </ul>
                    )
            }
           
    </>
   
  
    )
}