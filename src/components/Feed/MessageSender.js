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
                <Avatar/>
                <form>
                    <input value={input}
                           onChange={e => setInput(e.target.value)}
                           type={'text'}
                           placeholder={'Hôm nay bạn thế nào?'}
                           className={'messageSender_input'}/>
                    <input value={imageUrl}
                           onChange={e => setImageUrl(e.target.value)}
                           type={'text'} placeholder={'image URL '}/>
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