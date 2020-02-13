import React from "react";
import App from "next/app";
import UserContextProvider from "./comps/context.js";
import { Helmet } from "react-helmet";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserContextProvider>
        <Component {...pageProps} />

        <Helmet>
          <meta charSet="utf-8" />
          
          <title>Broughton Detailing | Mobile Auto Detailing Matthews, NC</title> />
          <meta name="description" content="Mobile auto detailing in Matthews, NC. We'll come to you! Broughton Detailing delivers nothing short of a remarkable result."/>
        </Helmet>
      </UserContextProvider>
    );
  }
}

export default MyApp;
