import React, {  useState, useEffect } from "react";
import mona from '../../assets/mona.jpeg';
import hasbi1 from "../../assets/hasbi1.jpg"
import hasbi2 from "../../assets/hasbi2.jpg"
import TOPG from "../../assets/TOPG.mp3";
import tates from "../../assets/tates.JPG"
import './home.css'



const Home = () => {
    const [isDisco, setIsDisco] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);


    const playSound = () => {
        const audio = new Audio(TOPG);
        audio.play();
        setIsDisco(true);
        setIsPlaying(true);
       
    }
    const stopAll = () => {
        const audio = new Audio(TOPG);
        audio.pause();
        audio.currentTime = 0;
        setIsDisco(false);
        setIsPlaying(false);
    }
    useEffect(() => {
        document.body.classList.add('home-page');
        return () => {
            document.body.classList.remove('home-page');
        }
    }, [])
    const additionalContent = isPlaying && (
        <div className="tate" >
    <div className="free-container">
      <img src={tates} className="tates" />
      <h2 className="free" >#Free the Tates</h2>
    </div>
    </div>
  
    );

    return (
        <div className="container">
        <h1 className="text">Övningar React playground</h1>
        <div  className={`holderImages ${isDisco ? 'disco' : ''}`}>
        <img className={`hasbulla ${isPlaying ? 'dance' : ''}`} src={hasbi2} onClick={stopAll} />
        <img className={`mona ${isDisco ? 'disco' : ''}`} src={mona} onClick={playSound}/>
        <img className={`hasbulla ${isPlaying ? 'dance' : ''}`} src={hasbi1} onClick={stopAll} />
        </div>
        {additionalContent}
        </div>
    )
}

export default Home;