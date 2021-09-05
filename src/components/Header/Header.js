import React, {useState} from 'react';
import "./Header.css"
import {
    Search, Home, Flag, StorefrontOutlined, SupervisedUserCircle,
    SubscriptionsOutlined, Add, Forum, NotificationsActive, ExpandMore
} from '@material-ui/icons'
import {Avatar, IconButton, Popover, Typography} from "@material-ui/core";
import ListAction from "./ListAction";


function Header(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = (e) => {
        setAnchorEl(null)
    }
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
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
                    <Avatar src={'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/149152170_2964676293817456_7684703501999024230_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kUzibKagpwsAX-J5F31&_nc_ht=scontent.fhan2-3.fna&oh=1c3495047e0ad74a36847ed014e23a90&oe=615911FA '} alt=''/>
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
                <IconButton onClick={handleClick}>
                    <ExpandMore/>
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <ListAction/>
                </Popover>
            </div>

        </div>
    );
}

export default Header;
