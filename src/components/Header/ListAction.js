import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    Typography
} from "@material-ui/core";
import {Settings, ExitToApp} from '@material-ui/icons'
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: "360px",
        backgroundColor: theme.palette.background.paper
    },
    inline: {
        display: "inline"
    }
}));

function ListAction(props) {
    const classes = useStyles();
    const onSignOut = () =>{
        firebase.auth().signOut()
    }
    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start" button>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/149152170_2964676293817456_7684703501999024230_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kUzibKagpwsAX-J5F31&_nc_ht=scontent.fhan2-3.fna&oh=1c3495047e0ad74a36847ed014e23a90&oe=615911FA "/>
                </ListItemAvatar>
                <ListItemText
                    primary="Nguyệt Moon"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Xem trang cá nhân của bạn
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem button>
                <ListItemIcon>
                    <Settings/>
                </ListItemIcon>
                <ListItemText primary="Cài đặt quyền riêng tư" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem button onClick={onSignOut}>
                <ListItemIcon>
                    <ExitToApp/>
                </ListItemIcon>
                <ListItemText
                    primary="Đăng xuất"
                />
            </ListItem>
        </List>
    );
}

export default ListAction;
