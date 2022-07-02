import React, {useEffect, useState} from "react";
import NavBar from '../components/NavBar'
import {results} from '../AtpData'
import Image from "../components/Image";
const RankingA = () => {
    const [player, setPlayer] = useState('');

    
    return (
        <>
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
        </>
    )
}

export default RankingA;