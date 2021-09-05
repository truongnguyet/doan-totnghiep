import React from 'react';
import "./Header.css"
import {
    Search, Home, Flag, StorefrontOutlined, SupervisedUserCircle,
    SubscriptionsOutlined, Add, Forum, NotificationsActive, ExpandMore
} from '@material-ui/icons'
import {Avatar, IconButton} from "@material-ui/core";


function Header(props) {
    return (
        <div className="header">
            <div className="header_left">
                <img src={'/images/fb_logo.png'} alt=''/>
            <div className="header_input">
                <Search/>
                <input type={'text'} placeholder={'Search'}/>
            </div>
            </div>
            <div className="header_middle">
                <div className="header_option header_option_active">
                    <Home fontSize={'large'}/>
                </div>
                <div className="header_option">
                    <Flag fontSize={'large'}/>
                </div>
                <div className="header_option">
                    <SubscriptionsOutlined fontSize={'large'}/>
                </div>
                <div className="header_option">
                    <StorefrontOutlined fontSize={'large'}/>
                </div>
                <div className="header_option">
                    <SupervisedUserCircle fontSize={'large'}/>
                </div>

            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar />
                    <h4>Nguyệt Moon</h4>
                </div>
                <IconButton>
                    <Add/>
                </IconButton>
                <IconButton>
                    <Forum/>
                </IconButton>
                <IconButton>
                    <NotificationsActive/>
                </IconButton>
                <IconButton>
                <ExpandMore/>
                </IconButton>
            </div>

        </div>
    );
}

export default Header;