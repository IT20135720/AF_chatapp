import React, { useEffect } from "react";
import { Container, Box, Text, Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import ChatLogin from "./Authentication/ChatLogin";
import ChatSignup from "./Authentication/ChatSignup";
import { useHistory } from "react-router-dom";
import './App.css';


const ChatHome = () => {

    const history = useHistory();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if (user) history.push("/chats");

    }, [history]);

    return (
        <div className="App">
            <Container maxW='xl' centerContent>
                <a style={{ marginTop: "20px", marginRight: "1350px", width: "20%" }} className="btn btn-secondary" href="/dashboard2">
                    <i class="fas fa-backward"></i>&nbsp; Back
                </a>
                <Box
                    d='flex'
                    justifyContent='center'
                    p={3}
                    bg={"white"}
                    w="100%"
                    m="40px 0 15px 0"
                    borderRadius="lg"
                    borderWidth="1px"
                >
                    <Text fontSize='4xl' fontFamily="Work sans" color='black'>Chat Corner</Text>
                </Box>
                <Box bg="white" w="100%" p={4} borderRadius="lg" color='black' borderWidth="1px">
                    <Tabs variant='soft-rounded'>
                        <TabList mb='1em'>
                            <Tab width="50%">Login</Tab>
                            <Tab width="50%">Sign Up</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <ChatLogin />
                            </TabPanel>
                            <TabPanel>
                                <ChatSignup />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>

            </Container>
        </div>
    )
}
export default ChatHome;