import React, { useEffect, useState } from 'react';
import './Recommande.css';
import thumbnail1 from "/src/assets/thumbnail1.png"; 
import { API_KEY, valueconverte } from '../../data';
import { Link } from 'react-router-dom';

const Recommande = ({ categoryId }) => {
    const [apidata, setApidata] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            if (!categoryId) {
                console.error("categoryId is undefined! Cannot fetch data.");
                return;
            }

            const relatedvideourl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
            
            fetch(relatedvideourl)
                .then(res => res.json())
                .then(data => {
                    if (data.items) {
                        setApidata(data.items);
                        console.log("Fetched Data:", data.items); // Debugging
                    } else {
                        console.error("No items found in API response", data);
                    }
                })
                .catch(error => console.error("Error fetching data:", error));
        };

        fetchdata();
    }, [categoryId]); // 🔥 Correctly placed useEffect

    return (
        <div className='recomanded'>
            {apidata.length === 0 ? (
                <p>Loading videos...</p>
            ) : (
                apidata.map((item, index) => (
                    <Link to ={`/video/${item.snippet.categoryId}/${item.id}`} key={item.id} className="sidevediolist">
                        <img src={item.snippet.thumbnails.medium.url} alt="Video Thumbnail" />
                        <div className='vidinfo'>
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{ valueconverte(item.statistics.viewCount)} views</p>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};

export default Recommande;
