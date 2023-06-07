import React from 'react';
import { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../../Constants/Constant'
import axios from '../../Axios ';
import './Banner.css'
import ShimmerBanner from '../ShimmerBanner.js/ShimmerBanner';

function Banner() {

    const [movie, setMovie] = useState();

    useEffect(() => { 
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)] );
        })
    },[])


    if( movie == undefined) {
        return <ShimmerBanner />
    }else {
        return ( 

            <div className='banner' style={{backgroundImage: `url(${imageUrl+movie?.backdrop_path})`}}>
                <div  className='content'>
                    <h1 className='title'> {movie?.title}</h1>
                    <div className='banner-buttons'>
                        <button className='play-button'>Play</button>
                        <button className='list-button'>My List</button>
                    </div>
                    <h1 className='description'> {movie?.overview}</h1>
                </div>
                <div className="fade_bottom"></div>
            </div>
        
          )
    }

 
}

export default Banner;