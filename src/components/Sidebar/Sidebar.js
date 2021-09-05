import React from 'react';
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import {EmojiFlags, People, Chat, VideoLibrary, LocalHospital, Storefront, ExpandMoreOutlined} from '@material-ui/icons'

function Sidebar(props) {
    return (
        <div className={'sidebar'}>
            <SidebarRow title={'Nguyệt Moon'} src={'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/149152170_2964676293817456_7684703501999024230_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kUzibKagpwsAX-J5F31&_nc_ht=scontent.fhan2-3.fna&oh=1c3495047e0ad74a36847ed014e23a90&oe=615911FA'}/>
            <SidebarRow title={'Trung tâm thông tin COVID-19'} Icon={LocalHospital}/>
            <SidebarRow title={'Trang'} Icon={EmojiFlags}/>
            <SidebarRow title={'Bạn bè'} Icon={People}/>
            <SidebarRow title={'Tin nhắn'} Icon={Chat}/>
            <SidebarRow title={'Chợ'} Icon={Storefront}/>
            <SidebarRow title={'Video'} Icon={VideoLibrary}/>
            <SidebarRow title={'Xem thêm'} Icon={ExpandMoreOutlined}/>
        </div>
    );
}

export default Sidebar;
