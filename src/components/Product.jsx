import React from 'react';
import "../styles/Product.css";
import {useStateValue} from './StateProvider';

function Product({id, title, price, image}) {
	const [{basket}, dispatch] = useStateValue();
	console.log('this is the basket', basket)

	const addToBasket = () =>{
		//dispatch an item into the data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				price: price,
				image: image,
			}
		});
	}
    return (
			<div className='product'>
				<div className='product__info'>
					<p>{title}</p>
					<p className='product__price'>
						<small>$</small>
						<price>{price}</price>
					</p>
				</div>
				{/* <div className='product__rating'>
					<img
						src='https://cdn.pixabay.com/photo/2016/03/31/17/33/icons-1293736_960_720.png'
						className='product__star'
						alt='star' 
					/>
				</div> */}
				<img
					src={image}
					className='product__image'
					alt=''
                />

                <button 
                type="button"
				onClick={addToBasket}
                className="product__button">
				Add to Basket
                </button>
			</div>
		);
}

export default Product;
