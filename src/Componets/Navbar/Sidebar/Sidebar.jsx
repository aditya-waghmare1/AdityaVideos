import React from 'react'
import './Sidebar.css'
import home from "/src/assets/home.png"; 
import game_icon from '/src/assets/game_icon.png';
import entertainment from '/src/assets/entertainment.png';
import tech from '/src/assets/tech.png';
import automobile from '/src/assets/automobiles.png'
import music from '/src/assets/music.png';
import blogs from '/src/assets/blogs.png';
import news from '/src/assets/news.png';
import jack from '/src/assets/jack.png';
import simon from '/src/assets/simon.png';
import tom  from '/src/assets/tom.png';
import megan from '/src/assets/megan.png';
import cameron from '/src/assets/cameron.png';



import sport from '/src/assets/sports.png';




const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`Sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className={`sidelink ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className={`sidelink ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={game_icon} alt="" /><p>Gaming</p>
            </div>
            <div className={`sidelink ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={automobile} alt="" /><p>Automobile</p>
            </div>
            <div className={`sidelink ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={sport} alt="" /><p>sport</p>
            </div>
            <div className={`sidelink ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt="" /><p>enterment</p>
            </div>
            <div className={`sidelink ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="" /><p>tech</p>
            </div>
            <div className={`sidelink ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="" /><p>Music</p>
            </div>
            <div className={`sidelink ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>
            <div className={`sidelink ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="" /><p>News</p>
            </div>
            
            <hr></hr>
            </div>

            <div className="suscribre-list">
                <h3>Suscribe</h3>
                <div className="sidelink">
                    <img src={jack} alt="" /><p>Pwedipia</p>

                </div>
                <div className="sidelink">
                    <img src={simon} alt="" /><p>Mr Beast</p>

                </div>
                <div className="sidelink">
                    <img src={tom} alt="" /><p>justin bapper</p>

                </div>
                <div className="sidelink">
                    <img src={megan} alt="" /><p>5 minute craft</p>

                </div>
                <div className="sidelink">
                    <img src={cameron} alt="" /><p>Nas daily</p>

                </div>
                
            </div>
            
        </div>
    

  )
}

export default Sidebar