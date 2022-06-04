import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ChatProvider from './Context/ChatProvider';
import { ChakraProvider } from "@chakra-ui/react";


ReactDOM.render(
    <ChakraProvider>
        <BrowserRouter>
            <ChatProvider>
                <App />
            </ChatProvider>
        </BrowserRouter>
    </ChakraProvider>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
