import React,{ Component } from 'react';
import './css/firstpage.css';
import './css/header.css';
import { withRouter } from 'react-router-dom';
import logo from '../static/images/mntc.png';
import about from '../static/images/about-01.svg';
import Carousel from './carousel';
import AOS from 'aos'
import $ from 'jquery'
import Footer from './footer';
import Header from './header';

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
                'title':'About Our College',
                'content':'The National Institute of Technology, Durgapur (formerly Regional Engineering College, Durgapur), was established by an Act of Parliament in 1960 as one of the eight such colleges aimed to function as a pace setter for engineering education in the country and to foster national integration.It is a fully-funded premier Technological Institution of the Government of India and is administered by an autonomous Board of Governors. Somewhere near the modest dwelling of daily wage-earners and plodders, there lies a heaven in which resides the greatest minds of National Institute of Technology, Durgapur, the cradle of human intellect and knowledge.'
            },
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
                <Header />
                <div className='carousel'>
                    <Carousel />
                </div>
                <div className="site-body" id='about'>
                    <div className='about-page' > 
                        <div  data-aos="flip-right" className='about-page-image'>
                            <img src={about} />
                        </div>
                        <div data-aos="fade-left" className='about-page-content'>
                                {contents.map((item, index) =>(
                                    <div>
                                        <h1>{item.title}</h1>
                                        <hr/>
                                        <br/>
                                        <p>{item.content}</p>
                                    </div>
                                ))}
                                <br/>
                                <a href="/events" style={{'color':'#239ab4','font-size':'20px','textDecoration':'none'}}>Click here to know more ...</a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withRouter( FirstPage);