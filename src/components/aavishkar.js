import './css/aavishkar.css';
import React,{ Component } from 'react';
import videoSrc from "../static/videos/video.mp4"

class Aavishkar extends Component{
    render(){
        return (
            <div className="site-body">
                <div className="fest">
                    <video autoplay='autoplay' loop muted >
                        <source src={videoSrc} type="video/mp4"/>
                    </video>
                    <div >
                        <div>
                        <h2>This year again we are coming with much more, so get ready for the ultimate fun!</h2>
                        <figure><img src="images/trailor.png" alt="Image"/></figure>
                        <a href="http://www.avskr.in">AAVISHKAR 2k18</a>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Aavishkar;