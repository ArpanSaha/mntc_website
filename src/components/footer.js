import React,{ Component } from 'react';
import './css/footer.css';
import logo from '../static/images/mntc.png';
import facebook from '../static/images/facebook.png';
import youtube from '../static/images/youtube.png';
import instagram from '../static/images/instagram.png';
import gmail from '../static/images/google-plus.png';

class Footer extends Component{
    render(){
        var socialSites=[
            {
                'loc': facebook,
                'name':'facebook',
                'address':''
            },
            {
                'loc':youtube,
                'name':'youtube',
                'address':''
            },
            {
                'loc':instagram,
                'name':'instagram',
                'address':''
            },
            {
                'loc':gmail,
                'name':'gmail',
                'address':''
            }
        ]
        return(
            <div className='site-footer'>
                <img src={logo} title='mntc'/>
                <div className='footer-info'>
                    <p>Stay Connected</p>
                    
                    <div className='social-icons'>      
                        <div style={{'display':'flex','margin':'0 auto'}}>                 
                        {socialSites.map((items, index) =>(
                            <div className='icon' key={index} >
                                <a href={items.address} title={items.name}>
                                    <img src={items.loc} style={{'fill':'white'}} />
                                </a>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                <hr/>
                <p className='credit-text'>Developed by tantrojan &#9400;</p>
            </div>
        );
    }
}

export default Footer;