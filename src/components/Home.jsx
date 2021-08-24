import React from 'react';
import "../styles/Home.css";
import Product from './Product' 


function Home() {
    return (
			<div classname='home'>
				<div className='home__container'>
					<div className='home__row'>
						<Product 
						title='The lean startup'
						price={29.99}
						image='https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg'
						/>

						<Product 
						title="KenWood KMIX"
						price={50.99}
						image='https://www.kenwoodworld.com/WebImage/Global/Product%20images/Kmix%20products/KMX754RD/KMX754RD_Picasso-KM-Glass-Bowl-BMK_V2_800x600.png'
						
						/>
					</div>
				</div>
					<div className='home__row'>
							<Product />
							<Product />
							<Product />
					</div>

					<div className='home__row'>
							<Product />
							<Product />
							<Product />
							<Product />
					</div>

					<div className='home__row'>
							<Product />	
					</div>	
			</div>
		);
}

export default Home;
