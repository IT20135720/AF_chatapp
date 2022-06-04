import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChatState } from "./Context/ChatProvider";
import ChatBox from "./miscellaneous/ChatBox";
import MyChats from "./miscellaneous/MyChats";
import SideDrawer from "./miscellaneous/SideDrawer";
import './App.css';



const ChatApp = () => {
    const { user } = ChatState();
    const [fetchAgain, setFetchAgain] = useState(false);

    return (
        <div className="App">
            <div style={{ width: '100%' }}>
                {user && <SideDrawer />}
                <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
                    {user && <MyChats
                        fetchAgain={fetchAgain} />}
                    {user && <ChatBox
                        fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
                </Box>
            </div>
        </div>
    )
}
export default ChatApp;