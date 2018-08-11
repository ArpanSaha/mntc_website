import React,{ Component } from 'react';
import './css/header.css';
import { Redirect } from 'react-router-dom';
import logo from '../static/images/mntc.png';

// function goToUrl(){
//     window.location = '/team';
// }

class Header extends Component {

      render(){
        
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
                'title':'Who we are ?',
                'content':'Mathematics,an abstract science of numbers, quantity and space, has held its place as prerequisite to flourish in today\'s world. At Maths N Tech Club, we realize the importance of analytical reasoning and rational thinking and hence organize a plethora of events which kindle student\'s interest in maths and the thirst of knowledge.'
            },
            {
                'title':'Story of Timeline',
                'content': 'Established in 2004, our club was set up with the motive of creating a platform for mathematical fervor through a multitude of challenges.'
            },
            {
                'title':'How we do it ?',
                'content': 'With the kind of support from our faculty and team members, MNTC has reached greater heights with every passing year. Our annual knowledge fest always keeps its promise to be the most happening fest for the inquisitive student minds.'
            }
        ]
        return(
            <div className="firstpage-header">
                <div className="firstpage-navbar">
                    <div className='buttons_group'>
                        {NavbarItemsLeft.map((item, index) =>(
                            <button
                                className="firstpage-navbar-button"
                                key={index} 
                                onClick={() => {window.location.href='/'+item.loc}}
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
                                onClick={() => {window.location.href='/'+item.loc}}
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
        );
    }
}

export default Header;