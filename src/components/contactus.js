import './css/contactus.css';
import React,{ Component } from 'react';
import videoSrc from "../static/videos/video.mp4";
import contact from "../static/images/contact.svg";

class ContactUs extends Component{
    
    render(){
        let postHolders=[
            {
                'name':'Punit Drolia',
                'post':'President',
                'email':'punitdrolia1995@gmail.com',
                'phone':'8967945051',
                'src':'punit',
                'fb' : 'https://www.facebook.com/punit.drolia'
            },
            {
                'name':'Sahil Jaiswal',
                'post':'Convenor',
                'email':'sahil131196@gmail.com',
                'phone':'9836286146 ',
                'src':'sahil',
                'fb' : 'https://www.facebook.com/sahil.jaiswal.7399'
            },
            {
                'name':'Sudipto Mukherjee',
                'post':'Treasurer',
                'email':'msudipto7@gmail.com',
                'phone':'8158892279',
                'src':'sudipto',
                'fb' :'https://www.facebook.com/msudipto9'
            },
            {
                'name':'Nidhi Kumar Yadav',
                'post':'General Secretary',
                'email':'nidhi.sagar.yadav@gmail.com',
                'phone':'7679883025',
                'src':'nidhi',
                'fb': 'https://www.facebook.com/nidhi.yadav.18294053',
            }
        ]
        return (
            <div className="site-body">
                <h1> Get in touch with us </h1>
                <hr/>
                <div className="contact-page">   
                    <div className="contact-col">
                        <div className="contactcard-holders">
                            {postHolders.map((item,index)=>(
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
                                    <div className="contactlink">
                                        <a href={item.fb}><i className="fa fa-facebook-square" aria-hidden="true" style={{"fontSize":"28px","padding":"5px"}}></i></a>
                                        <a href=""><i className="fa fa-google-plus-square" aria-hidden="true" style={{"fontSize":"28px","padding":"5px"}}></i></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="contact-col">
                        <div className="contact-col-img">
                                <img src={contact} />
                        </div>
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