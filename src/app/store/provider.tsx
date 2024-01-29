"use client"
import { Provider } from "react-redux";
import { store } from './index'
import React from "react";

const provider = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{ children }</Provider>
}

export default provider