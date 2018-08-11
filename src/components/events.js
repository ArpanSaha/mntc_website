import React,{ Component } from 'react';
import './css/body.css';
import './css/events.css';
import AOS from 'aos'

class Event extends Component{
    constructor(props){
        super(props);
        this.state = { 
            active_menu: 'all'
        }
    }
    componentWillMount() {
        this.menu = [
            {
                'name': "All",
                'value': "all"
            },
            {
                'name': "Creativity",
                'value': "creativity"
            },
            {
                'name': "Brain Storming",
                'value': "brain"
            },
            {
                'name': "Coding",
                'value': "coding"
            },
            {
                'name': "Title",
                'value': "title"
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
        let festEvents=[
            {
                'name': 'Clash Of Titans',
                'desc': 'The Aavishkar Championship',
                'type': ['title']
            },
            {
                'name': 'Constructo',
                'desc': 'Let your dreams come to life',
                'type': ['creativity', 'brain']
            },
            {
                'name': 'Kryptic',
                'desc': 'Decipher the future',
                'type': ['brain']
            },
            {
                'name': 'Matrix',
                'desc': 'Unleash the mathemagician in you',
                'type': ['brain']
            },
            {
                'name': 'Simplex',
                'desc': 'Unleash the coder in you',
                'type': ['coding']
            },
            {
                'name': 'Terrorist Takedown',
                'desc': 'The treasure Hunt',
                'type': ['brain', 'title']
            }
        ]
        return(
            <div className='site-body'>
                <h1>Flagship Events</h1>
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
                <div>
                    <h1>Events during Fest</h1>
                    <ul className="event-toggle">
                        {this.menu.map((menu, index) => (
                            <li className={ (menu.value === this.state.active_menu) ? "active" : null}>
                                <a href="#" onClick={(e) => { e.preventDefault(); this.setState({ active_menu: menu.value }) }}>{menu.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="event-groups">
                        {
                            festEvents.map(( item,index ) => (
                                item.type.indexOf(this.state.active_menu) !== -1 ? 
                                <div className={item.type + " event-card-sm"} key={index}>
                                    <h1>{item.name}</h1>
                                    <p>{item.desc}</p>
                                </div> :
                                null
                            ))
                        }
                    </div>
                </div>
            </div>

        );
    }
}

export default Event;