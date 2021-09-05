import React from 'react';
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import {EmojiFlags, People, Chat, VideoLibrary, LocalHospital, Storefront, ExpandMoreOutlined} from '@material-ui/icons'

function Sidebar(props) {
    return (
        <div className={'sidebar'}>
            <SidebarRow title={'Nguyet Moon'} src={'https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg'}/>
            <SidebarRow title={'COVID 19 Information Center'} Icon={LocalHospital}/>
            <SidebarRow title={'Pages'} Icon={EmojiFlags}/>
            <SidebarRow title={'Friends'} Icon={People}/>
            <SidebarRow title={'Messenger'} Icon={Chat}/>
            <SidebarRow title={'Marketplace'} Icon={Storefront}/>
            <SidebarRow title={'Videos'} Icon={VideoLibrary}/>
            <SidebarRow title={'Marketplace'} Icon={ExpandMoreOutlined}/>
        </div>
    );
}

export default Sidebar;