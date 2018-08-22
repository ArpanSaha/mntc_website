import React,{ Component } from 'react';
import AOS from 'aos';
import './css/body.css';
import './css/team.css';


class Team extends Component {
    constructor(props){
        super(props);
        this.state = { 
            active_menu: 'fourth'
        }
    }
    componentWillMount() {
        this.menu = [
            {
                'name': "Office Bearers",
                'value': "fourth"
            },
            {
                'name': "Senior Fest Coordinators",
                'value': "third"
            },
            {
                'name': "Fest Coordinators",
                'value': "second"
            }
        ]
    }
    render(){
        let members=[
            {
                'name':'Punit Drolia',
                'post':'President',
                'src': 'punit',
                'year': 'fourth'
            },
            {
                'name':'Sahil Jaiswal',
                'post':'Convener',
                'src': 'sahil',
                'year': 'fourth'
            },
            {
                'name':'Nidhi Kumar Yadav',
                'post':'General Secretary',
                'src': 'nidhi',
                'year': 'fourth'
            },
            {
                'name':'Sudipto Mukherjee',
                'post':'Treasurer',
                'src': 'sudipto',
                'year': 'fourth'
            },
            {
                'name':'Srinjoy Banerjee',
                'post':'Tech Head',
                'src': 'srinjoy',
                'year': 'fourth'
            },
            {
                'name':'Afaque Alam',
                'post':'Ankshala Head & ',
                'src': 'afaque',
                'year': 'fourth'
            },
            {
                'name':'Utkarsh Jaiswal',
                'post':'Assistant General Secretary',
                'src': 'utkarsh',
                'year': 'fourth'
            },
            {
                'name':'Bhanu Prakash',
                'post':'Sponsorship Head',
                'src': 'bhanu',
                'year': 'fourth'
            },
            {
                'name':'Shikha Kujur',
                'post':'Web-D Head',
                'src': 'shikha',
                'year': 'fourth'
            },            
            {
                'name':'Shivansh Kumar Dubey',
                'post':'Logistics Head',
                'src': 'shivansh',
                'year': 'fourth'
            },
            {
                'name':'Shaista Ambreen',
                'post':'Creative Head',
                'src': 'shaista',
                'year': 'fourth'
            },
            {
                'name':'Vikas Kumar',
                'post':'Publicity Head',
                'src': 'vikas',
                'year': 'fourth'
            },            
            {
                'name':'Iimon Tarun Kataki',
                'post':'Workshop Head',
                'src': 'iimon',
                'year': 'fourth'
            },
            {
                'name':'Late Amit Kumar',
                'post':'',
                'src': 'amit',
                'year': 'fourth'
            },
            {
                'name':'R. Likhith',
                'post':'',
                'src': 'likhith',
                'year': 'fourth'
            },
            {
                'name':'Abhas Gorain',
                'src': 'abhas',
                'year': 'third'
            },
            {
                'name':'Adrish Bir',
                'src': 'adrish',
                'year': 'third'
            },
            {
                'name':'Anshul Thakur',
                'src': 'anshul',
                'year': 'third'
            },
            {
                'name':'Avinash Boppudi',
                'src': 'avinash',
                'year': 'third'
            },
            {
                'name':'Brijesh',
                'src': 'brijesh',
                'year': 'third'
            },
            {
                'name':'Dishant Bole',
                'src': 'dishant',
                'year': 'third'
            },
            {
                'name':'Geeta Madhuri',
                'src': 'geeta',
                'year': 'third'
            },
            {
                'name':'Hariharan',
                'src': 'hariharan',
                'year': 'third'
            },
            {
                'name':'Kuldeep Jangid',
                'src': 'kuldeep',
                'year': 'third'
            },
            {
                'name':'Nikhil Murarka',
                'src': 'nikhil',
                'year': 'third'
            },
            {
                'name':'Piyush Jain',
                'src': 'piyush',
                'year': 'third'
            },
            {
                'name':'Samriddhi Gupta',
                'src': 'samriddhi',
                'year': 'third'
            },
            {
                'name':'Satantra Tiwari',
                'src': 'satantra',
                'year': 'third'
            },
            {
                'name':'Sayanti Dey',
                'src': 'sayanti',
                'year': 'third'
            },
            {
                'name':'Shankar Ray',
                'src': 'shankar',
                'year': 'third'
            },
            {
                'name':'Souman Pani',
                'src': 'souman',
                'year': 'third'
            },
            {
                'name':'Subhranshu Mohanty',
                'src': 'subhranshu',
                'year': 'third'
            },
            {
                'name':'Tamal Choudhury',
                'src': 'tamal',
                'year': 'third'
            },
            {
                'name':'Tanmoy Ghosh',
                'src': 'tanmoy',
                'year': 'third'
            },
            {
                'name':'Vijaya Bhuvanagiri',
                'src': 'vijaya',
                'year': 'third'
            },
        ]
        AOS.init({
            duration : 2000
        });
        return(
            <div className='site-body'>
                <h1>Our Team</h1>
                <hr/>
                <br/>
                <p className="quote">"Alone we can do so little, together we can do so much."</p>
                <ul className="team-toggle">
                        {this.menu.map((menu, index) => (
                            <li className={ (menu.value === this.state.active_menu) ? "active" : null}>
                                <a href="#" onClick={(e) => { e.preventDefault(); this.setState({ active_menu: menu.value }) }}>{menu.name}</a>
                            </li>
                        ))}
                    </ul>
                 <div className='card_holder'>
                    {
                        members.map((item, index) =>(
                            <div  className={(this.state.active_menu === item.year )?"member-card":"inactive-member-card"} key={index}>
                                <div className='card-image'>
                                    <img src={"assets/team/" + item.src + ".jpg"} />
                                </div>
                                <div className="card-info">
                                    <h1>{item.name}</h1>
                                    <p>{item.post}</p>
                                </div>
                               
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