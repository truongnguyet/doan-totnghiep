import React, {useState} from 'react';
import './MessageSender.css'
import {Avatar} from "@material-ui/core";
import {Videocam, PhotoLibrary, InsertEmoticon} from '@material-ui/icons'

function MessageSender(props) {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
        setImageUrl("");
    }
    return (
        <div className={'messageSender'}>
            <div className="messageSender_top">
                <Avatar src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/149152170_2964676293817456_7684703501999024230_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kUzibKagpwsAX-J5F31&_nc_ht=scontent.fhan2-3.fna&oh=1c3495047e0ad74a36847ed014e23a90&oe=615911FA" alt={''}/>
                <form>
                    <input value={input}
                           onChange={e => setInput(e.target.value)}
                           type={'text'}
                           placeholder={'Hôm nay bạn thế nào?'}
                           className={'messageSender_input'}/>
                    <button onClick={handleSubmit} type={'submit'}>
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <Videocam style={{color: 'red'}}/>
                    <h3>Phát trực tiếp</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibrary style={{color: 'green'}}/>
                    <h3>Ảnh/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticon style={{color: 'orange'}}/>
                    <h3>Cảm xúc/ Hoạt động</h3>
                </div>

            </div>
        </div>
    );
}

export default MessageSender;
