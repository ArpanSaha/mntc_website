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
                'name': 'Call Out Sherlock',
                'shortdesc': 'A nice murder. That\'ll cheer you up',
                'type': ['brain'],
                'src' : './assets/events/cos.jpg',
                'desc': 'A crime scene is depicted and a team work is required to connect the clues and solve the mystery.'
            },
            {
                'name': 'Clash Of Titans',
                'shortdesc': 'The Aavishkar Championship',
                'type': ['title'],
                'src' : './assets/events/cos.jpg',
                'desc' : 'It is a relay race ride where the winners of each event need to overcome the obstacles to cross the finish line.'
            },
            {
                'name': 'Constructo',
                'shortdesc': 'Let your dreams come to life',
                'type': ['creativity', 'brain'],
                'src' : './assets/events/ct.jpg',
                'desc' : 'The participants are given the opportunity to unleash the engineering skills in them and to make a working prototype out of some raw materials. The prototype has to undergo certain tests and winners are decided on their prototype’s performance.'
            },
            {
                'name': 'Kryptic',
                'shortdesc': 'Decipher the future',
                'type': ['brain'],
                'src' : './assets/events/ky.jpg',
                'desc':'It is an event to test your code cracking abilities. It does not require any previous knowledge other than presence of mind.'
            },
            {
                'name': 'Matrix',
                'shortdesc': 'Unleash the mathemagician in you',
                'type': ['brain'],
                'src' : './assets/events/mt.jpg',
                'desc':'This event is event based on the ability of rational thinking, making sense of obscure data amid perplexity in puzzles.'
            },
            {
                'name': 'Simplex',
                'shortdesc': 'Unleash the coder in you',
                'type': ['coding'],
                'desc' : 'Simplex is an onsite programming event which is maths at one end and algorithmic programming at the other. Though various programming methodologies may lead to correct solution, but a slight mathematical approach can make your solution quicker and elegant. '
            },
            {
                'name': 'Terrorist Takedown',
                'shortdesc': 'The treasure Hunt',
                'type': ['brain', 'title'],
                'src' : './assets/events/tt.jpg',
                'desc' : 'It is a test of both speed and skill, as the race is not just within the mind, but extends to the physical world where the team is required to hunt for clues, decipher the coded message and reach successive checkpoints.'
            },
            {
                'name' : 'Cuborita',
                'shortdesc' : 'Is there a pattern to it?',
                'desc':'Cuborita is a team event in which the team is required to deal with a Rubik\'s cube along with a jenga.',
                'type': ['brain', 'creativity'],
                'src' : './assets/events/cu.jpg',
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
                    <hr/>
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
                                <div className={index%2==0?'blog-card':'blog-card alt'} key={index}>
                                    <div className="meta">
                                        <div className="photo" style={{'background-image': 'url('+item.src+')'}}></div>
                                    </div>
                                    <div className="description">
                                        <h1>{item.name}</h1>
                                        <h2>{item.shortdesc}</h2>
                                        <p> {item.desc}</p>
                                    </div>
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