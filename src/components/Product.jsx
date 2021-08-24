import React from 'react';
import "../styles/Product.css";

function Product({id, title, price, image}) {
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
                className="product__button">Add to Basket
                </button>
			</div>
		);
}

export default Product;
