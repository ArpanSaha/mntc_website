import './css/aavishkar.css';
import './css/events.css';
import React,{ Component } from 'react';
import videoSrc from "../static/videos/video.mp4";
import imageSrc from "../static/images/trailor.png";

class Aavishkar extends Component{
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
        return (
            <div className="site-body">
                <div className="fest">
                    <video autoplay='autoplay' loop muted >
                        <source src={videoSrc} type="video/mp4"/>
                    </video>
                    <div className="fest-overlay">
                        <div>
                        <figure><img src={imageSrc} alt="Image"/></figure>
                        <h2>This year again we are coming with much more, so get ready for the ultimate fun!</h2>
                        {/* <a href="http://www.avskr.in">AAVISHKAR 2k18</a> */}
                        </div>
                    </div>
                </div>
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
                                ( item.type.indexOf(this.state.active_menu) !== -1 || this.state.active_menu === 'all' )? 
                                <div className={item.type + " event-card-sm"} key={index}>
                                    <h1>{item.name}</h1>
                                    <p>{item.desc}</p>
                                </div> :
                                null
                            ))
                        }
                    </div>
                </div>
                {/* <div className='site-body'>
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
                </div> */}
            </div> 
        )
    }
}

export default Aavishkar;