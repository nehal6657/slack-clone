import { Avatar } from '@material-ui/core';
import React from 'react';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlilneIcon from "@material-ui/icons/HelpOutline";
import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ user }] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                {/* avatar for user and time icon */}
                {user?.displayName}
                {/*user?.photoURL*/} 
                <Avatar
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon></AccessTimeIcon>

            </div>
            <div className="header__search">
                <SearchIcon></SearchIcon>
                <input placeholder="Search"/>
            
            </div>
            <div className="header__right">
                <HelpOutlilneIcon/>

            </div>
            
        </div>
    )
}

export default Header
