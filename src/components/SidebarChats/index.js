import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../services/firebase'
import * as C from "./styles"
import { useCollection } from 'react-firebase-hooks/firestore'
import SideBarChatsItem from "../sideBarChatsItem"

const SidebarChats = ({ setUserChat, userChat }) => {
    const [user] = useAuthState(auth)

    const refChat = db
        .collection("chats")
        .where("users", "array-contains", user.email)

    const [chatsSnapshot] = useCollection(refChat)
    return (
        <C.Container>
            {chatsSnapshot?.docs.map((item, index) => (
                <C.Content key={index}>
                    <SideBarChatsItem
                    id={item.id}
                    users={item.data().users}
                    setUserChat={setUserChat}
                    active={userChat?.chatId === item.id ? "active" : ""}
                />
                </C.Content>
            ))}
        </C.Container>
    )
}

export default SidebarChats