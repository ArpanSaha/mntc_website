import React,{ Component } from 'react';
import './css/footer.css';
import logo from '../static/images/mntc.png';
// import facebook from '../static/images/facebook.png';
// import youtube from '../static/images/youtube.png';
// import instagram from '../static/images/instagram.png';
// import gmail from '../static/images/google-plus.png';

class Footer extends Component{
    constructor(props){
        super(props);
        this.state ={
            footerClass : this.props.footerClass || 'site-footer'
        }
    }
    render(){
        var socialSites=[
            {
                'name':'facebook',
                'address':'https://www.facebook.com/mathsntechclub/'
            },
            {
                'name':'youtube',
                'address':'https://www.youtube.com/channel/UCQMKQOji7qul1pwDpkeOa8A'
            }
        ]
        return(
            <div className={this.state.footerClass}>
                <img src={logo} title='mntc'/>
                <div className='footer-info'>
                    <p>Stay Connected</p>
                    
                    <div className='social-icons'>      
                        <div style={{'display':'flex','margin':'0 auto'}}>                 
                        {socialSites.map((items, index) =>(
                            <div className='icon' key={index} >
                                <a href={items.address} title={items.name}>
                                    <i className={"fa fa-"+items.name} style={{'fill':'white','fontSize':'28px'}} />
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