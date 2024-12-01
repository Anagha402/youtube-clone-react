import React, { useEffect, useState } from 'react'

import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import share from '../assets/share.png'
import save from '../assets/save.png'
import jack from '../assets/jack.png'
import user_profile from '../assets/user_profile.jpg'
import {value_converter, API_KEY} from '../data'
import moment from 'moment'


function PlayVideo({videoId}) {
    const[apiData, setApiData]=useState(null)
    const[channelData, setChannelData]=useState(null)

    const fetchVideoData=async()=>{
        const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY} `
        await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));

    }
    
    useEffect(()=>{
        fetchVideoData();
    },[])



    const fetchOtherData=async()=>{
        const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY} `
    }
  return (
    <>

    <div className="play-video">
    {/* <video src={video1} controls autoPlay muted></video> */}
    <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>

    <div className="play-video-info">
    <p>{apiData?value_converter(apiData.statistics.viewCount):"6K"} &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow() :" a while ago"}</p>
        <div>
            <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount): 155}</span>
            <span><img src={dislike} alt="" />4</span> 
            <span><img src={share} alt="" />Share</span> 
            <span><img src={save} alt="" />Save</span>
        </div>
    </div>
    <hr/>

    <div className="publisher">
        <img src={jack} alt="" />

        <div>
            <p style={{color:"#000", fontWeight:'600', fontSize:"18px"}}> {apiData? apiData.snippet.channelTitle : ""} <br /><span style={{fontSize:"15px", color:"#5a5a5a"}}>1M Subscribers</span></p>
           
        </div>
        <button>Subscribe</button>
    </div>

    <div className="vid-description">
        <p>{apiData?apiData.snippet.description.slice(0,250):''}</p>
        
        <hr />
    <h4>{apiData?value_converter(apiData.statistics.commentCount): 102}Comments</h4>
    {/* comment 1 */}
    <div className="comment">
             <img src={user_profile} alt="" />
             <div>
                <h3>Jack Nick <span>1 day ago</span></h3>
                <p>The video mis good</p>

                     <div className="comment-action">
                <            img src={like} alt="" />
                             <span>244</span>
                             <img src={dislike} alt="" />
                             <span>44</span>

                    </div>
            </div>
         </div>
         {/* comment 2 */}
         <div className="comment">
             <img src={user_profile} alt="" />
             <div>
                <h3>Jack Nick <span>1 day ago</span></h3>
                <p>The video mis good</p>

                     <div className="comment-action">
                <            img src={like} alt="" />
                             <span>244</span>
                             <img src={dislike} alt="" />
                             <span>44</span>

                    </div>
            </div>
         </div>
         {/* comment 3 */}
         <div className="comment">
             <img src={user_profile} alt="" />
             <div>
                <h3>Jack Nick <span>1 day ago</span></h3>
                <p>The video mis good</p>

                     <div className="comment-action">
                <            img src={like} alt="" />
                             <span>244</span>
                             <img src={dislike} alt="" />
                             <span>44</span>

                    </div>
            </div>
         </div>
         {/* comment 4 */}
         <div className="comment">
             <img src={user_profile} alt="" />
             <div>
                <h3>Jack Nick <span>1 day ago</span></h3>
                <p>The video is good</p>

                     <div className="comment-action">
                <            img src={like} alt="" />
                             <span>244</span>
                             <img src={dislike} alt="" />
                             <span>44</span>

                    </div>
            </div>
         </div>


        

    </div>
    
    
    </div>
      
    </>
  )
}

export default PlayVideo
