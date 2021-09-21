import React from 'react';
import "../styles/Home.css";
import Product from './Product' 


function Home() {
    return (
			<div classname='home'>
				<div className='home__container'>
					<div className='home__row'>
						<Product 
						id='14598789'
						title='The lean startup'
						price={29.99}
						image='https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg'
						/>

						<Product 
						title="KenWood KMIX Stand Mixer"
						price={50.99}
						image='https://www.kenwoodworld.com/WebImage/Global/Product%20images/Kmix%20products/KMX754RD/KMX754RD_Picasso-KM-Glass-Bowl-BMK_V2_800x600.png'
						
						/>
					</div>
				</div>
					<div className='home__row'>
						<Product
						title="Amazon Echo Studio"
						price="199.99"
						image='https://www.bhphotovideo.com/images/images500x500/amazon_b07g9y3zmc_echo_studio_high_fidelity_smart_1512893.jpg'
						/>

						<Product
						title='New Apple Ipad Pro'
						price='250.5'
						image='https://cdn.shopify.com/s/files/1/0011/0162/7439/products/cell-space_326ff6bb-eb87-49e6-8ede-2061cc84638a_2048x.png?v=1626452517'
						/>
						<Product
						title='Samsung Wristwatch'
						price='150.87'
						image='https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/31/100417/1.jpg?4284'
						
						/>
					</div>

					<div className='home__row'>
							<Product
							title="Samsung LS27R650FDU - 68.6 cm 27 1920 x 1080 pixels - Full HD - IPS - 5 ms - Black - Gray"
							price="1,456"
							image='https://www.senetic.com/media/catalog/product/cache/b4fce4dfc07bada8cc629f57790ac393/6/0/60f1320acdbb5_75635645_6058286314_1.png'
							
							/>	
					</div>	
			</div>
		);
}

export default Home;
