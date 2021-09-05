import React from 'react';
import './Story.css'
import {Avatar} from "@material-ui/core";

function Story({image, profileScr, title}) {
    return (
        <div className={'story'} style={{background: `url(${image}`}}>
            <Avatar src={profileScr} className={'story_avatar'}/>
            <h4>{title}</h4>
        </div>
    );
}

export default Story;
