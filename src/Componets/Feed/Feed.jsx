import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from "/src/assets/thumbnail1.png"; 
import thumbnail2 from "/src/assets/thumbnail2.png"; 
import thumbnail3 from "/src/assets/thumbnail3.png"; 
import thumbnail4 from "/src/assets/thumbnail4.png"; 
import thumbnail5 from "/src/assets/thumbnail5.png"; 
import thumbnail6 from "/src/assets/thumbnail6.png"; 
import thumbnail7 from "/src/assets/thumbnail7.png"; 
import thumbnail8 from "/src/assets/thumbnail8.png"; 
import { Link } from 'react-router-dom';
import { valueconverte } from '../../data';

import { API_KEY } from '../../data';
import moment from 'moment';


const Feed = ({category}) => {
    const [data,setData] = useState([]);
    const FetchData =async()=>{
        const videoList_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY} `
        await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
    
    }
    useEffect(()=>{
        FetchData();
    },[category])






  return (
    <div className="feed">
        {data.map((items,index)=>(
             <Link to={`video/${items.snippet.categoryId}/${items.id}`} className='card'>
             <img src={items.snippet.thumbnails.medium.url} alt="" />
             <h2>{items.snippet.title}</h2>
             <h3>{items.snippet.channelTitle}</h3>
             <p>{valueconverte(items.statistics.viewCount)   }  Views &bull; {moment(items.snippet.publishedAt).fromNow()}</p>
             
         </Link>
         
           


        )

        )}
        
       
    

    </div>
    
  )
}

export default Feed