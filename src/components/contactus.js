import './css/contactus.css';
import React,{ Component } from 'react';
import videoSrc from "../static/videos/video.mp4";
import imageSrc from "../static/images/trailor.png";

class ContactUs extends Component{
    
    render(){
        let postHolders1=[
            {
                'name':'Punit Drolia',
                'post':'President',
                'email':'punit.123@gmail.com',
                'phone':'987543210',
                'src':'punit'
            },
            {
                'name':'Sahil Jaiswal',
                'post':'Convenor',
                'email':'sahil.123@gmail.com',
                'phone':'987543210',
                'src':'sahil'
            }

        ]
        let postHolders2=[
            {
                'name':'Sudipto Mukherjee',
                'post':'Treasurer',
                'email':'sudipto.123@gmail.com',
                'phone':'987543210',
                'src':'sudipto'
            },
            {
                'name':'Nidhi Kumar Yadav',
                'post':'General Secretary',
                'email':'nidhi.123@gmail.com',
                'phone':'987543210',
                'src':'nidhi'
            }
        ]
        return (
            <div className="site-body">
                <h1> Contact US </h1>
                <div className="contact-page">   
                    <div className="contact-col">
                        <div className="contactcard-holders">
                            {postHolders1.map((item,index)=>(
                                <div className="contactcard">
                                    <div className='contactphoto'>
                                        <img src={"assets/team/" + item.src + ".jpg"}/>
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
                    </div>
                    <div className="contact-col">
                        <div className="contactcard-holders">
                            {postHolders2.map((item,index)=>(
                                <div className="contactcard">
                                    <div className='contactphoto'>
                                        <img src={"assets/team/" + item.src + ".jpg"}/>
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
                    </div>
                    <div className="contact-col">
                    <p>Like our facebook page to stay updated</p>
                    <br/>
                    <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fmathsntechclub%2F&width=152&layout=button_count&action=like&size=large&show_faces=true&share=true&height=46&appId" width="152" height="46" style={{"border":"none", "overflow":"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </div>
            </div> 
        )
    }
}

export default ContactUs;