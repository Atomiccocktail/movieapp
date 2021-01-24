import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem';
import axios from 'axios';
//var cors = require('cors');

const MovieList = () => {
    const [items,setitems]=useState([]);

    useEffect(() => {

        const key = 'e042c8dd5e2010f987662d748e3b72c7';

        const getmoviedata = async()=>{

        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`);
        setitems(res.data.results);
        console.log(res.data.results);
    }

    const getapidata = async()=>{

        const resone = await axios({
            method: 'get',
            url: 'https://api.pinnacle.com/v2/bets?betlist=RUNNING&fromDate=2017-11-21T00:00:00Z&toDate=2017-11-29T00:00:00Z',
            headers: {
                Authorization: 'Basic SkIxMDUyNzIyOlF3ZXJ0eTg4OA==', // see: https://github.com/pinnacleapi/pinnacleapi-documentation
                Accept: 'application/json',
                "Access-Control-Allow-Origin": "http://localhost:3002"
              },
            Authorization: 'auth'
          });
        //setitems(res.data.results);
        console.log(resone.data.results);
    }    


    

    getmoviedata();
    getapidata();

    },[]);

    

  return (
    <div>
        <div className="container">
            <div className="row">
                {items.map( (item)=>(
                    <MovieItem key={item.id} item={item}/>
                ))}
                
            </div>
            <div className="row">
                {items.map( (item)=>(
                    <MovieItem key={item.id} item={item}/>
                ))}
                
            </div>
        </div>
      
    </div>
  )
}

export default MovieList
