import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOptions/SidebarOption';
import { AccessTime, AccountBoxOutlined, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Phone, Star } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import {openSendMail} from '../../Redux Store/features/mailSlice'

function Sidebar() {

    const dispatch = useDispatch()

    const createEmail = () => (
        dispatch( openSendMail() )
    )

    return (
        <div className="sidebar">
            <Button onClick={createEmail} startIcon={<AddIcon fontSize="large" />} className="sidebar__compose">
                Compose
            </Button>
            <div className="sidebar__options">
                <SidebarOption Icon={Inbox} title={"Inbox"} num={"11"}/>
                <SidebarOption Icon={Star} title={"Stared"} num={"11"}/>
                <SidebarOption Icon={AccessTime} title={"Snoozed"} num={"11"}/>
                <SidebarOption Icon={LabelImportant} title={"Important"} num={"11"}/>
                <SidebarOption Icon={NearMe} title={"Sent"} num={"11"}/>
                <SidebarOption Icon={Note} title={"Draft"} num={"11"}/>
                <SidebarOption Icon={ExpandMore} title={"More"} num={"11"}/>
            </div>
            <div className="sidebar__footer">
                <IconButton>
                    <AccountBoxOutlined />
                </IconButton>
                <IconButton>
                    <Duo />
                </IconButton>
                <IconButton>
                    <Phone />
                </IconButton>
            </div>
        </div>
    )
}

export default Sidebar
