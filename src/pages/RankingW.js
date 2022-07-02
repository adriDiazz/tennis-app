import React from "react";
import { results } from "../WtaData";
import NavBar from "../components/NavBar";
import Image from "../components/Image";

const RankingW = () => {
    return (
        <div>
                <div className="bg-slate-900 h-full ">
                <NavBar/>
                <div className="flex flex-wrap mt-14 h-screen">
                {
                results.rankings.map((player, index) => {
                    
                    return (
                        <>
                        <Image player={player} index={index} />
                        </>
                        
                    )
                })
                }
                </div>
            </div>
        </div>
    )
}

export default RankingW;