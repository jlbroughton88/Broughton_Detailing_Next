import React from "react";
import App from 'next/app';
import UserContextProvider from "./comps/context.js";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return  (
            <UserContextProvider>
                <Component {...pageProps} />
            </UserContextProvider>
        )
    }
}

export default MyApp;