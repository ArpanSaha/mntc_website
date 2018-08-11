import './css/contactus.css';
import React,{ Component } from 'react';
import videoSrc from "../static/videos/video.mp4";
import imageSrc from "../static/images/trailor.png";

class ContactUs extends Component{
    
    render(){
        let postHolders=[
            {
                'name':'Punit Drolia',
                'post':'President',
                'email':'punit.123@gmail.com',
                'phone':'987543210'
            },
            {
                'name':'Punit Drolia',
                'post':'President',
                'email':'punit.123@gmail.com',
                'phone':'987543210'
            },
            {
                'name':'Punit Drolia',
                'post':'President',
                'email':'punit.123@gmail.com',
                'phone':'987543210'
            }
        ]
        return (
            <div className="site-body">
                <div className="contact-page">
                    <h1>Post Holders</h1>
                    <div className="contactcard-holders">
                        {postHolders.map((item,index)=>(
                            <div className="contactcard">
                                <div className='contactphoto'>
                                    <img />
                                </div>
                                <div className='contactinfo'>
                                    <p>{item.name}</p>
                                    <p className="post">{item.post}</p>
                                    <p>{item.phone}</p>
                                    <p>{item.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1>Faculty Advisors</h1>
                </div>
            </div> 
        )
    }
}

export default ContactUs;