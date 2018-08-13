import React,{ Component } from 'react';
import './css/firstpage.css';
import './css/header.css';
import { withRouter } from 'react-router-dom';
import logo from '../static/images/mntc.png';
import Carousel from './carousel';
import AOS from 'aos'
import $ from 'jquery'
import Footer from './footer';

class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerClass : 'firstpage-header'
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {

        if(window.scrollY>650)
        {
            this.setState({
                headerClass : 'page-header'
            })
        }
        else
        {
            this.setState({
                headerClass : 'firstpage-header'
            })
        }
    }
        
    render(){
        AOS.init({
            duration : 3000
        }
        );
        let NavbarItemsLeft = [
            {
                'name': 'AboutUs',
                'loc' : 'aboutus'
            },
            {
                'name': 'Events',
                'loc' : 'events'
            },
            {
                'name': 'Team',
                'loc' : 'team'
            }
        ]
        let NavbarItemsRight = [
            {
                'name': 'Aavishkar',
                'loc' : 'aavishkar'
            },
            {
                'name': 'Anveshan',
                'loc' : 'anveshan'
            },
            {
                'name': 'Contact Us',
                'loc' : 'contactus'
            }
        ]
        let contents=[
            {
                'title':'Who are we ?',
                'content':'Mathematics,an abstract science of numbers, quantity and space, has held its place as prerequisite to flourish in today\'s world. At Maths N Tech Club, we realize the importance of analytical reasoning and rational thinking and hence organize a plethora of events which kindle student\'s interest in maths and the thirst of knowledge.'
            },
            {
                'title':'Story of Timeline',
                'content': 'Established in 2004, our club was set up with the motive of creating a platform for mathematical fervor through a multitude of challenges.'
            },
            {
                'title':'How do we it ?',
                'content': 'With the kind of support from our faculty and team members, MNTC has reached greater heights with every passing year. Our annual knowledge fest always keeps its promise to be the most happening fest for the inquisitive student minds.'
            }
        ]
        return(
            <div>
                <div className={this.state.headerClass}>
                    <div className="firstpage-navbar">
                        <div className='buttons_group'>
                            {NavbarItemsLeft.map((item, index) =>(
                                <button
                                    className="firstpage-navbar-button"
                                    key={index} 
                                    onClick={() => {this.props.history.push('/'+item.loc)}}
                                >
                                    <span>
                                        <div>
                                            <span>{item.name}</span>
                                        </div>
                                    </span>
                                </button>
                            ))}
                        </div>
                        <a className="firstpage-logo" href="/">
                            <img src={logo}/>    
                        </a> 
                        <div className='buttons_group'>
                            {NavbarItemsRight.map((item, index) =>(
                                <button
                                    className="firstpage-navbar-button"
                                    key={index} 
                                    onClick={() => {this.props.history.push('/'+item.loc)}}
                                >
                                    <span>
                                        <div>
                                            <span>{item.name}</span>
                                        </div>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <Carousel />
                <div className="site-body-full" style={{'background-image': 'url(/assets/about.jpeg)','background-repeat':'no-repeat','background-size':'cover'}} id='about'>
                    {/* <h1>About Us</h1>
                    <div data-aos='fade-up' className='aboutus-desc'>
                        {contents.map((item, index) =>(
                            <div className='aboutus-card'>
                                <h1>{item.title}</h1>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div> */}
                    <div style={{ 'display' : 'flex', 'width' : '100%', 'height' : '100%'}}>
                        <div className='about-college-desc'>
                            <h1>About Our college</h1>
                            <p>The National Institute of Technology, Durgapur (formerly Regional Engineering College, Durgapur), was established by an Act of Parliament in 1960 as one of the eight such colleges aimed to function as a pace setter for engineering education in the country and to foster national integration.It is a fully-funded premier Technological Institution of the Government of India and is administered by an autonomous Board of Governors.
Somewhere near the modest dwelling of daily wage-earners and plodders, there lies a heaven in which resides the greatest minds of National Institute of Technology, Durgapur, the cradle of human intellect and knowledge, the confluence of various difficult times especially the naxalite uprising of 80's, NIT Durgapur has the steadfast support of its student and faculty, combined with infrastructure of institute facility.
With precarious and careful laden mixture of youth and experience, old methods, new technologies, conventional stability and rebellious vivacity, NIT Durgapur poises to reach the pinnacle of glory and indeterminable heights of excellence.The never ending spirit and unquenchable thirst for knowledge that the institution stands for is symbolized in every success story of college. So come lets explore the spirits.
                            </p>
                        </div>
                        <div className='about-college-desc'>
                            {contents.map((item, index) =>(
                                <div className='about-club-desc'>
                                    <h1>{item.title}</h1>
                                    <p>{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withRouter( FirstPage);