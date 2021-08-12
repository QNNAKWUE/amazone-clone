import React from 'react';
import "../styles/Header.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


function Header() {
    return (
        <div className="header">
            <img 
                src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png" 
                className="header__logo"
                alt="amazon header" />
            
            <div className="header__search">
                <input 
                className="header__searchInput"
                type="text" />
                <SearchOutlinedIcon
                className="header__searchIcon" 
                font-size="large"/>
            </div>

        <div className="header__nav">
            <div className="header__option">
                <span 
                className="header__option1">
                Hello, Sign in
                </span>
                <span className="header__option2">
                Account & Lists
                </span>
            </div>

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
                    <ShoppingCartOutlinedIcon
                    className="header__basket" 
                    font-size="large" />
                    <span 
                    classname="header__optionCount">
                    0
                    </span>  
            </div> 
        </div>



    </div>
    )
}

export default Header
