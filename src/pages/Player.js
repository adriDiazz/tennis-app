import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/NavBar";
import { results } from "../AtpData";
import { getPlayerId, getPlayerStats } from "../utils/getPlayerId";
import Spinner from "../components/Spinner";

const Player = () => {
    const {name} = useParams();
    const [ranking, setRanking] = useState('');
    const [player, setPlayer] = useState({});
    const [id, setId] = useState(undefined);
    const [stats, setStats] = useState({});
    const getImg = (playerName) => {
        fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=pageimages&format=json&piprop=original&titles=${playerName}`)
        .then(res => res.json())
        .then(data => {
            const pages = data.query.pages;
            const page = pages[Object.keys(pages)[0]];
            const img = page.original.source;
            setRanking(img)
        })
    }
    useEffect(() => {
        getImg(name)
        setPlayer(results.rankings.find(player => player.full_name === name));
        getPlayerId(name).then(id => {
            //setId(id);
            getPlayerStats(id).then(stats => {
                setStats(stats.data.player_data[0]);
            }).catch(err => console.log(err));
        });

    }, []);
    
    return (
        <>
            <Navbar/>
            <div className="bg-slate-900 h-screen">
                <div className="bg-green-500 flex h-2/3">
                    <div className="flex items-center justify-evenly gap-56 bg-slate-900 h-full w-full">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-white font-bold text-5xl">{player.ranking}º</h1>
                            <h1 className="text-white font-bold text-xl">Ranking</h1>
                            <h1 className="text-white font-bold text-5xl">{name}</h1>
                            <span className="font-thin text-gray-300">Country: {player.country}</span>
                            <span className="font-thin text-gray-300">Points: {player.ranking_points}</span>
                        </div>
                        <img className="h-3/4 border rounded" src={ranking}/>
                    </div>
                </div>
                    <div className="flex items-center justify-center mt-10 gap-24 overflow-auto scrolleo">
                        
                        <Spinner stats={stats}/>

                    </div>
            </div>
        </>
    )
}

export default Player