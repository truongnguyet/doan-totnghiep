import React from 'react';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Widget from "../Widget/Widget";

function Home(props) {
    return (
        <div className={'app'}>
            <Header/>
            <div className="app_body">
                <Sidebar/>
                <Feed/>
                <Widget/>
            </div>
        </div>
    );
}

export default Home;