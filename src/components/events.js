import React,{ Component } from 'react';
import './css/body.css';
import './css/events.css';

class Event extends Component{
    render(){
        var flagshipEvents=[
            {
                'name':'Ankshala',
                'desc':'Ansible is a free software tool that allows you to configure and manage nodes. This is achieved by creating groups of machines and describing which actions should be taken on them. The required commands for this are issued from a central location. It has various built-in modules to allow easy configuration management. It uses SSH to connect to different nodes and hence nothing needs to be installed on the targeted machines. Ansible only runs on the main control machine which runs the commands.',
                'src':'/assets/2.jpg'
            },
            {
                'name':'Ankshala',
                'desc':'Ansible is a free software tool that allows you to configure and manage nodes. This is achieved by creating groups of machines and describing which actions should be taken on them. The required commands for this are issued from a central location. It has various built-in modules to allow easy configuration management. It uses SSH to connect to different nodes and hence nothing needs to be installed on the targeted machines. Ansible only runs on the main control machine which runs the commands.',
                'src':'/assets/3.jpg'
            },
            {
                'name':'Ankshala',
                'desc':'Ansible is a free software tool that allows you to configure and manage nodes. This is achieved by creating groups of machines and describing which actions should be taken on them. The required commands for this are issued from a central location. It has various built-in modules to allow easy configuration management. It uses SSH to connect to different nodes and hence nothing needs to be installed on the targeted machines. Ansible only runs on the main control machine which runs the commands.',
                'src':'/assets/4.jpg'
            },
            {
                'name':'Ankshala',
                'desc':'Ansible is a free software tool that allows you to configure and manage nodes. This is achieved by creating groups of machines and describing which actions should be taken on them. The required commands for this are issued from a central location. It has various built-in modules to allow easy configuration management. It uses SSH to connect to different nodes and hence nothing needs to be installed on the targeted machines. Ansible only runs on the main control machine which runs the commands.',
                'src':'/assets/5.jpg'
            }
            // {
            //     'name':'',
            //     'desc':'',
            //     'src':''
            // },
            // {
            //     'name':'',
            //     'desc':'',
            //     'src':''
            // }
        ]
        return(
            <div className='site_body'>
                {flagshipEvents.map((item,index)=>(
                    <div className={index%2==0?'blog-card':'blog-card alt'} key={index}>
                        <div className="meta">
                            <div className="photo" style={{'background-image': 'url('+item.src+')'}}></div>
                        </div>
                        <div className="description">
                            <h1>{item.name}</h1>
                            <h2>Opening a door to the future</h2>
                            <p> {item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Event;