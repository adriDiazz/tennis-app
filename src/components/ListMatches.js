import React, {useCallback, useState, useEffect} from 'react';
import axios from 'axios';
import Match from '../components/Match';    

const ListMatches = ({}) => {
    const [matches, setMatches] = useState([]);

    const fetchMatches = useCallback(async () => {
        const options = {
            method: 'GET',
            url: 'https://betfair-sportsbook.p.rapidapi.com/live-matches-by-sport',
            params: {sport: 'tennis', lang: 'en'},
            headers: {
              'X-RapidAPI-Key': '868ba11d06msha916afa6c0886c9p1dd568jsn16befb6d99b6',
              'X-RapidAPI-Host': 'betfair-sportsbook.p.rapidapi.com'
            }
          };
        const {data} = await axios(options);
        setMatches(data);
        
    }, []);

    useEffect(() => {
        fetchMatches();
    }, []);

    return(
        <>

            <div className="flex bg-slate-800 overflow-x-scroll overflow-y-hidden h-34 w-screen scrolleo">
                {
                    matches.map((match, index) => {
                        return(
                            <div className="flex flex-col items-center justify-center gap-5 p-4  mt-14 h-24">
                                <div className="mb-12 bg-slate-800">
                                    <Match key={index} match={match}/>
                                </div>
                            </div>
                )
            }
        )
                }
            </div>
        </>
    )
}

export default React.memo(ListMatches);