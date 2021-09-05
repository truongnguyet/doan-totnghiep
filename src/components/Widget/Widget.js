import React from 'react';
import './Widget.css'
function Widget(props) {
    return (
        <div className={'widget'}>
            <iframe src={'https://www.youtube.com/watch?v=B-kxUMHBxNo'}
                    width="340"
                    height={"100%"}
                    style={{border: "none", overflow: "hidden"}}
                    scrolling={"no"}
                    frameBorder={"0"}
                    allowTransparency={"true"}
                    allow={"encrypted-media"}
            />
        </div>
    );
}

export default Widget;