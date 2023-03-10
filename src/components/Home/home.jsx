import React from "react";
import mona from '../../assets/mona.jpeg';
import hasbi1 from "../../assets/hasbi1.jpg"
import hasbi2 from "../../assets/hasbi2.jpg"
import './home.css'

const Home = () => {
    return (
        <>
        <h1 className="text">Övningar React playground</h1>
        <div className="holderImages">
        <img src={hasbi2} />
        <img src={mona} />
        <img src={hasbi1} />
        </div>
        </>
    )
}

export default Home;