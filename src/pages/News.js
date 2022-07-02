import React from "react";
import Navbar from "../components/NavBar";
import axios from "axios";
import New from "../components/New";
import ListNews from "../components/ListNews";


const News = () => {

    return (
        <>
            <Navbar/>
            <div className="bg-slate-900 h-screen">
                <ListNews/>
            </div>
        </>
    )
}

export default News;