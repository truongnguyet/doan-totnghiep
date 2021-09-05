import React from 'react';
import './Post.css'
import {Avatar} from "@material-ui/core";
import {ThumbUp, Comment,Share} from "@material-ui/icons";

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className={'post'}>
            <div className="post_top">
                <Avatar src={profilePic} className={'post_avatar'}/>
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>TimeStamp...</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt={""}/>
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUp/>
                    <p>Thích</p>
                </div>
                <div className="post_option">
                    <Comment/>
                    <p>Bình luận</p>
                </div>
                <div className="post_option">
                    <Share/>
                    <p>Chia sẻ</p>
                </div>
            </div>
        </div>
    );
}

export default Post;