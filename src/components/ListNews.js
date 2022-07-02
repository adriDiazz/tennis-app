import React, {useState} from "react"
import {  useCallback, useEffect } from "react"
import loader from '../assets/loader.svg'
import axios from "axios"
import New from "./New";
const options = {
    method: 'GET',
    url: 'https://livescore6.p.rapidapi.com/news/v2/list-by-sport',
    params: {category: '2021020913321150030', page: '1'},
    headers: {
      'X-RapidAPI-Key': 'ad83f5b327mshc1e5eae7455e015p11bd54jsn6e209e805091',
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
  };

const ListNews = () => {
    const [newss, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    const getNews = useCallback(async () => {
        const {data} = await axios(options);
        setNews(data.data);
    }, []);

    useEffect(() => {
        getNews().then(() => setLoading(true));
    }, []);    


    return (
        <div className=" flex flex-wrap items-center justify-center gap-5 p-4 h-auto bg-slate-900">
            {
                       loading ?  newss.map((news, index) => {
                            return (
                                <div className="mb-12 bg-slate-800">
                                    <New news={news}/>
                                </div>
                            )
                        }) : <div className="flex items-center justify-center h-screen"><img className="h-20" src={loader}/></div>  
            }
        </div>

    )
}

export default ListNews;