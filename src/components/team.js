import React,{ Component } from 'react';
import './css/body.css';
import './css/team.css';

class Team extends Component {
    constructor(props){
        super(props);
        this.state = { 
            active_menu: 'all'
        }
    }
    render(){
        let fourthYear=[
            {
                'name':'Punit Drolia',
                'post':'President',
                'src': 'punit'
            },
            {
                'name':'Sahil Jaiswal',
                'post':'Convener',
                'src': 'sahil'
            },
            {
                'name':'Nidhi Kumar Yadav',
                'post':'General Secretary',
                'src': 'nidhi'
            },
            {
                'name':'Sudipto Mukherjee',
                'post':'Treasurer',
                'src': 'sudipto'
            },
            {
                'name':'Srinjoy Banerjee',
                'post':'Tech Head',
                'src': 'srinjoy'
            },
            {
                'name':'Afaque Alam',
                'post':'Ankshala Head & ',
                'src': 'afaque'
            },
            {
                'name':'Utkarsh Jaiswal',
                'post':'Assistant General Secretary',
                'src': 'utkarsh'
            },
            {
                'name':'Bhanu Prakash',
                'post':'Sponsorship Head',
                'src': 'bhanu'
            },
            {
                'name':'Shikha Kujur',
                'post':'Web-D Head',
                'src': 'shikha'
            },            
            {
                'name':'Shivansh Kumar Dubey',
                'post':'Logistics Head',
                'src': 'shivansh'
            },
            {
                'name':'Shaista Ambreen',
                'post':'Creative Head',
                'src': 'shaista'
            },
            {
                'name':'Vikas Kumar',
                'post':'Publicity Head',
                'src': 'vikas'
            },            
            {
                'name':'Iimon Tarun Kataki',
                'post':'Workshop Head',
                'src': 'iimon'
            },
            {
                'name':'Late Amit Kumar',
                'post':'',
                'src': 'amit'
            },
            {
                'name':'R. Likhith',
                'post':'',
                'src': 'likhith'
            }
        ]
        let thirdYear=[
            {
                'name':'Abhas Gorain',
                'src': 'abhas'
            },
            {
                'name':'Adrish Bir',
                'src': 'adrish'
            },
            {
                'name':'Anshul Thakur',
                'src': 'anshul'
            },
            {
                'name':'Avinash Boppudi',
                'src': 'avinash'
            },
            {
                'name':'Brijesh',
                'src': 'brijesh'
            },
            {
                'name':'Dishant Bole',
                'src': 'dishant'
            },
            {
                'name':'Geeta Madhuri',
                'src': 'geeta'
            },
            {
                'name':'Hariharan',
                'src': 'hariharan'
            },
            {
                'name':'Kuldeep Jangid',
                'src': 'kuldeep'
            },
            {
                'name':'Nikhil Murarka',
                'src': 'nikhil'
            },
            {
                'name':'Piyush Jain',
                'src': 'piyush'
            },
            {
                'name':'Samriddhi Gupta',
                'src': 'samriddhi'
            },
            {
                'name':'Satantra Tiwari',
                'src': 'satantra'
            },
            {
                'name':'Sayanti Dey',
                'src': 'sayanti'
            },
            {
                'name':'Shankar Ray',
                'src': 'shankar'
            },
            {
                'name':'Souman Pani',
                'src': 'souman'
            },
            {
                'name':'Subhranshu Mohanty',
                'src': 'subhranshu'
            },
            {
                'name':'Tamal Choudhury',
                'src': 'tamal'
            },
            {
                'name':'Tanmoy Ghosh',
                'src': 'tanmoy'
            },
            {
                'name':'Vijaya Bhuvanagiri',
                'src': 'vijaya'
            }
        ]
        return(
            <div className='site-body'>
                <h1>Our Team</h1>
                <hr/>
                <h2>Fourth Year</h2>
                <div className='card_holder'>
                    {
                        
                        fourthYear.map((item, index) =>(
                            <div className="member-card" key={index}>
                                <div className='card-image'>
                                    <img src={"assets/team/" + item.src + ".jpg"} />
                                </div>
                                <div className="card-info">
                                    <h1>{item.name}</h1>
                                    <p>{item.post}</p>
                                </div>
                                {/* Overlays */}
                                <div class="gradient-overlay"></div>
                                <div class="color-overlay"></div>       
                            </div>
                        ))
                    }
                </div>
                <h2>Third Year</h2>
                <div className='card_holder'>
                    {
                        thirdYear.map((item, index) =>(
                            <div className="member-card" key={index}>
                                <div className='card-image'>
                                    <img src={"assets/team/" + item.src + ".jpg"} />
                                </div>
                                <div className="card-info">
                                    <h1>{item.name}</h1>
                                </div>
                                {/* Overlays */}
                                <div class="gradient-overlay"></div>
                                <div class="color-overlay"></div>       
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Team;