import React from 'react';
import "../styles/Home.css";
import Product from './Product' 

function Home() {
    return (
			<div classname='home'>
				<div className='home__container'>
					{/* <img
						src='https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
						className='home__image'
						alt='home_image'
					/> */}
					<div className='home__row'>
						<Product />
					</div>
				</div>
			</div>
		);
}

export default Home;
