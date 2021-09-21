import React from 'react';
import "../styles/Header.css";
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from './StateProvider';
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


function Header() {
    const [{basket}] = useStateValue();
    return (
        <div className="header">
            <Link to='/Home'>
                <img 
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                        className="header__logo"
                        alt="amazon header" />
            </Link>
                 
            <div className="header__search">
                <input 
                className="header__searchInput"
                type="text" />
                <SearchOutlinedIcon
                className="header__searchIcon" 
                font-size="large"/>
            </div>

        <div className="header__nav">
            <Link to='/Login'>
                <div className="header__option">
                    <span 
                    className="header__option1">
                    Hello, Sign in
                    </span>
                    <span className="header__option2">
                    Account & Lists
                    </span>
                </div>
            </Link>

            <div className="header__option">
                <span 
                className="header__option1">
                Returns
                </span>
                <span className="header__option2">
                & Orders
                </span>
            </div>

            <div className="header__option">
                <span 
                className="header__option1">
                Your
                </span>
                <span className="header__option2">
                Prime
                </span>
            </div>

            <div className="header__optionBasket">
                <Link to='/Checkout'>
                    <ShoppingCartOutlinedIcon
                        className="header__basket" 
                        font-size="large" />
                        <span 
                        classname="header__optionCount">
                        {basket?.length}
                        </span>  
                </Link> 
            </div> 
        </div>



    </div>
    )
}

export default Header
