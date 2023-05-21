 import React, {useEffect, useState} from 'react';
 import { imageUrl, API_KEY } from '../../Constants/Constant';
 import axios from '../../Axios'
 import YouTube from 'react-youtube'
 import "./RowPost.css"

 
 function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState('');

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results);
        })
    },[])

    console.log(movies)

    const movieTrailer = (movieId) => {
        axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log("this is video data  ......",response.data);
            if(response.data.results.length > 0) {
                setUrlId(response.data.results[0]);
            } else {
                console.log("Empty array ...")
            }
        })
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
    };


    // console.log(" this is url id--",urlId)

    return (
     <div className='row'>
        <h2 style={{paddingLeft: "1%", paddingTop: "1%"}} > {props?.key}</h2>
        <div className="posters">
            {
                movies.map((item) => 
                    <img className={ props.isSmall ? "smallPoster" : 'poster'} src={`${imageUrl+item?.backdrop_path}`} alt="poster" onClick={() => { movieTrailer(item?.id)}} />
                )
            }
        </div>
        { urlId && <YouTube videoId={urlId?.key} opts={opts} onReady={this._onReady} />}
     </div>
   )
 }
 
 export default RowPost;