import React from 'react';
import './Feed.css'
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "../Post/Post";

function Feed(props) {
    return (
        <div className={'feed'}>
            <StoryReel/>
            <MessageSender/>
            <Post profilePic={'https://scr.vn/wp-content/uploads/2020/07/T%E1%BA%A3i-h%C3%ACnh-n%E1%BB%81n-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-1.jpg'}
                  message={'Hello'}
                  timestamp={'2/09/2021'}
                  username={'Nguyen Phi'}
                  image={'https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2nh-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-th%E1%BA%BF-gi%E1%BB%9Bi-v%E1%BB%81-t%C3%ACnh-y%C3%AAu.jpg'}
            />
            <Post profilePic={'https://1.bp.blogspot.com/-w0tuNJmSXd0/XqZl8GlApdI/AAAAAAAAjPw/gyfuiDcFGCQPl7BeLqc11Q_8shZkb7OaACLcBGAsYHQ/s1600/Anh-avatar-dep-cho-con-trai%2B%252837%2529.jpg'}
                  message={'Một ngày đẹp'}
                  timestamp={'10h 05/09/2021'}
                  username={'Mai Thu'}
                  image={'https://anhdepblog.com/wp-content/uploads/2020/10/ngam-thien-nhien-the-gioi-qua-nhung-hinh-anh-dep-nhat-2.jpg'}
            />
            <Post profilePic={'https://1.bp.blogspot.com/-w0tuNJmSXd0/XqZl8GlApdI/AAAAAAAAjPw/gyfuiDcFGCQPl7BeLqc11Q_8shZkb7OaACLcBGAsYHQ/s1600/Anh-avatar-dep-cho-con-trai%2B%252837%2529.jpg'}
                  message={'Một ngày đẹp'}
                  timestamp={'10h 05/09/2021'}
                  username={'Mai Thu'}
                  image={'https://anhdepblog.com/wp-content/uploads/2020/10/ngam-thien-nhien-the-gioi-qua-nhung-hinh-anh-dep-nhat-2.jpg'}
            />
        </div>
    );
}

export default Feed;