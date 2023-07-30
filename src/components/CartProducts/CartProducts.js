import React from 'react'
import './CartProducts.css';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useStateValue } from '../../contextAPI/StateProvider';
export default function CartProducts({id, title, price, rating, image}) {
    
    const [{ cart }, dispatch] = useStateValue()
    let halfRating = (rating - Math.floor(rating)) * 10;

    const removeFromCart = () => {

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id 
            
        });
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(Math.floor(rating))
                            .fill()
                            .map((_, index) => (
                                <StarIcon key={index} />
                            ))
                    }
                    {
                        (halfRating > 0) ? <StarHalfIcon /> : <></>
                    }
                </div>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    )
}
