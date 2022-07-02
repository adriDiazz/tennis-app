import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { restOfImages } from "../assets/restOfImages";

const Image = ({ player,index }) => {
    const [ranking, setRanking] = useState('');
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
        getImg(player.first_name + '_' + player.last_name)
    }, []);

    return (
    <NavLink to={`${player.full_name}`} className="  rounded-lg   hover:bg-gray-700 ">
        <div className="flex flex-col justify-start items-center p-4 leading-normal  gap-2 ">
            <img className="h-40 border rounded" src={  Object.keys(restOfImages).includes(player.first_name) ? restOfImages[player.first_name] : ranking}/>
            {
                index + 1 === 1 ? <h5 className=" text-xl font-bold tracking-tight text-white dark:text-white">{index + 1}º ❇️ {player.full_name}</h5>
                    :    <h5 className=" text-xl font-bold tracking-tight text-white dark:text-white">{index + 1}º  {player.full_name}</h5>

            }
            <p className=" font-normal text-gray-400 dark:text-gray-200">{player.full_name}</p>
            <p className=" font-normal text-gray-400 dark:text-gray-200">Points: {player.ranking_points}</p>
            <p className=" font-normal text-gray-400 dark:text-gray-200">Country: {player.country}</p>
        </div>
    </NavLink>
    )

}

export default Image;