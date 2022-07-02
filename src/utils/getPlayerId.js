import { getByPlaceholderText } from "@testing-library/react";
import axios from "axios";
const options = {
    method: 'GET',
    url: 'https://ultimate-tennis1.p.rapidapi.com/rankings/atp/singles/20/current',
    headers: {
      'X-RapidAPI-Key': '868ba11d06msha916afa6c0886c9p1dd568jsn16befb6d99b6',
      'X-RapidAPI-Host': 'ultimate-tennis1.p.rapidapi.com'
    }
  };


export async function getPlayerId(playerName) {
    const {data} = await axios(options);
    const player = data.data.filter(player => player.Name === playerName);
    return player[0].id;
}

export async function getPlayerStats(playerId) {
    const options = {
        method: 'GET',
        url: `https://ultimate-tennis1.p.rapidapi.com/player_stats/atp/${playerId}`,
        headers: {
          'X-RapidAPI-Key': '868ba11d06msha916afa6c0886c9p1dd568jsn16befb6d99b6',
          'X-RapidAPI-Host': 'ultimate-tennis1.p.rapidapi.com'
        }
      };
    return await axios(options)
}
const optionsW = {
    method: 'GET',
    url: 'https://ultimate-tennis1.p.rapidapi.com/rankings/wta/singles/20/current',
    headers: {
      'X-RapidAPI-Key': '868ba11d06msha916afa6c0886c9p1dd568jsn16befb6d99b6',
      'X-RapidAPI-Host': 'ultimate-tennis1.p.rapidapi.com'
    }
  };
  
export async function getPlayerIdW(playerName) {
    const {data} = await axios(optionsW);
    const player = data.data.filter(player => player.name === playerName);
    return player[0]["ID"];
}

export async function getPlayerStatsW(playerId) {
    const options = {
        method: 'GET',
        url: `https://ultimate-tennis1.p.rapidapi.com/player_stats/wta/${playerId}/2022`,
        headers: {
          'X-RapidAPI-Key': '868ba11d06msha916afa6c0886c9p1dd568jsn16befb6d99b6',
          'X-RapidAPI-Host': 'ultimate-tennis1.p.rapidapi.com'
        }
      };
    return await axios(options)
}