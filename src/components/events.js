import React,{ Component } from 'react';
import './css/body.css';
import './css/events.css';
import Slider from './slider';
import AOS from 'aos';

class Event extends Component{
    constructor(props){
        super(props);
        this.state = { 
            active_event: 'ankshala'
        }
    }
    componentWillMount(){
            this.eventToggle = [
            {
                'name' : 'Ankshala',
                'value' : 'ankshala'
            },
            {
                'name' : 'Knock Knock',
                'value' : 'knock_knock'
            },
            {
                'name' : 'Terrorist Takedown',
                'value' : 'terrorist_takedown'
            }
        ]
    }
    render(){
        AOS.init({
            duration : 3000
        }
        );
        let flagshipEvents=[
            {
                'name':'Ankshala',
                'desc':'Ansible is a free software tool that allows you to configure and manage nodes. This is achieved by creating groups of machines and describing which actions should be taken on them. The required commands for this are issued from a central location. It has various built-in modules to allow easy configuration management. It uses SSH to connect to different nodes and hence nothing needs to be installed on the targeted machines. Ansible only runs on the main control machine which runs the commands.',
                'src':'/assets/2.jpg'
            },
            {
                'name':'Knock Knock',
                'desc':'Ansible is a free software tool that allows you to configure and manage nodes. This is achieved by creating groups of machines and describing which actions should be taken on them. The required commands for this are issued from a central location. It has various built-in modules to allow easy configuration management. It uses SSH to connect to different nodes and hence nothing needs to be installed on the targeted machines. Ansible only runs on the main control machine which runs the commands.',
                'src':'/assets/3.jpg'
            },
            {
                'name':'Ankshala',
                'desc':'Ansible is a free software tool that allows you to configure and manage nodes. This is achieved by creating groups of machines and describing which actions should be taken on them. The required commands for this are issued from a central location. It has various built-in modules to allow easy configuration management. It uses SSH to connect to different nodes and hence nothing needs to be installed on the targeted machines. Ansible only runs on the main control machine which runs the commands.',
                'src':'/assets/4.jpg'
            }
        ]
        return(
            <div className="site-body-full">
                <div className="fullpage-event-toggler">
                    <ul>
                    <h3>Flagship Events</h3>    
                    {this.eventToggle.map((item, index)=>(
                        <li className={(item.value === this.state.active_event  )?'active':null}>{item.name}</li>
                    ))}
                    </ul>
                </div>
                {flagshipEvents.map((item, index)=>(
                    <div className="fullpage-event-content" key={index}>
                        <h1>{item.name}</h1>
                        <div className="fullpage-event-slider">
                            <Slider />
                        </div>
                        <div className="fullpage-event-desc">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        );
    }
}

export default Event;