import React from 'react'
import * as C from './styles'
import SidebarHeader from '../SidebarHeader'
import SidebarChat from '../SidebarChats'

const Sidebar = ({setUserChat, userChat}) => {
    return (
        <C.Container>
            <SidebarHeader setUserChat={setUserChat} />
            <SidebarChat setUserChat={setUserChat} userChat={userChat} />
        </C.Container>
        
    )
}

export default Sidebar