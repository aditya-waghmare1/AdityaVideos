import React, { useEffect, useState } from 'react';
import './Playvideo.css';
import like from '/src/assets/like.png';
import dislike from '/src/assets/dislike.png';
import share from '/src/assets/share.png';
import save from '/src/assets/save.png';
import user_profile from '/src/assets/user_profile.jpg';
import { API_KEY, valueconverte } from '../../data';
import moment from 'moment';


const Playvideo = ({ videoId }) => {
    const [apidata, setApidata] = useState(null);
    const [channeldata, setChanneldata] = useState(null);
    const[commentdata,setcommentdata] =useState([]);

    const fetchvideodata = async () => {
        try {
            const videodetailsurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
            const response = await fetch(videodetailsurl);
            const data = await response.json();
            if (data.items && data.items.length > 0) {
                setApidata(data.items[0]);
            }
        } catch (error) {
            console.error('Error fetching video data:', error);
        }
        const commentdataurl =`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
        await fetch(commentdataurl).then(res=>res.json()).then(data=>setcommentdata(data.items));
    };

    const fetchOtherdata = async () => {
        try {
            if (!apidata) return;
            const channeldataurl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${apidata.snippet.channelId}&key=${API_KEY}`;
            const response = await fetch(channeldataurl);
            const data = await response.json();
            if (data.items && data.items.length > 0) {
                setChanneldata(data.items[0]);
            }
        } catch (error) {
            console.error('Error fetching channel data:', error);
        }
    };

    useEffect(() => {
        fetchvideodata();
    }, [videoId]);

    useEffect(() => {
        if (apidata) {
            fetchOtherdata();
        }
    }, [apidata]);

    return (
        <div className='play-video'>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <h3>{apidata ? apidata.snippet.title : 'Title here'}</h3>
            <div className="play-video-info">
                <p>
                    {apidata ? valueconverte(apidata.statistics.viewCount) : '0'} views &bull;
                    {apidata ? moment(apidata.snippet.publishedAt).fromNow() : ''}
                </p>
                <div>
                    <span><img src={like} alt="like" /> {apidata ? valueconverte(apidata.statistics.likeCount) : '0'}</span>
                    <span><img src={dislike} alt="dislike" /></span>
                    <span><img src={share} alt="share" /> Share</span>
                    <span><img src={save} alt="save" /> Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channeldata ? channeldata.snippet.thumbnails.default.url : ''} alt="" />
                <div>
                    <p>{apidata ? apidata.snippet.channelTitle : 'Channel Name'}</p>
                    <span>{channeldata ? valueconverte(channeldata.statistics.subscriberCount) : '0'} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="viddicribtion">
                <p>{apidata ? apidata.snippet.description.slice(0, 250) : 'Description here...'}</p>
                <hr />
                <h4>{apidata ? valueconverte(apidata.statistics.commentCount) : '0'} Comments</h4>
                
                   {commentdata.map((items,index)=>{
                    return (
                        <div className="comment" >
                        <img src={items.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user" />
                        <div>
                            <h3>{items.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                            <p>{items.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img src={like} alt="like" /><span>{items.snippet.topLevelComment.snippet.likeCount}</span>
                                <img src={dislike} alt="dislike" /><span>2</span>
                            </div>
                        </div>
                    </div>
            

                    )
                   })}
                   
                    
            </div>
        </div>
    );
};

export default Playvideo;