import React,{ Component } from 'react';
import './css/body.css';
import './css/events.css';
import Slider from './slider';
import AOS from 'aos';
import $ from 'jquery';

class Event extends Component{
    constructor(props){
        super(props);
        this.state = { 
            active_event: 'ankshala'
        }
    }
    handleScrollMenu(){
        console.log('scrolling');
    }
    handleScrollEvent(add){

        let scrollElement='#'+add;
        console.log(window.scrollY);
        window.scrollTo({
            top: $(scrollElement).offset().top-70,
            behavior : "smooth"
        });
        this.setState({
            active_event: add
        })
    }
    componentWillMount(){
            this.eventToggle = [
            {
                'name' : 'Ankshala',
                'value' : 'ankshala'
            },
            {
                'name' : 'Knock Knock',
                'value' : 'knock_knock'
            },
            {
                'name' : 'Terrorist Takedown',
                'value' : 'terrorist_takedown'
            }
            // ,
            // {
            //     'name' : 'TIME scholarship Test',
            //     'value' : 'time'
            // }
        ]
    }
    render(){
        AOS.init({
            duration : 2000,
            once : true
        }
        );
        let flagshipEvents=[
            {
                'name':'Ankshala',
                'desc':'Ankshala is an aptitude test conducted in various schools in and around Durgapur,Asansol,Burdwan and Bankura.This is done to install a sense of competitiveness and to see the problem solving abilities among the students.The top students meet for the final clash at NIT Durgapur.',
                'src':[{'src':'/assets/events/ankshala/bidhan.jpg'},{'src':'/assets/events/ankshala/guruteg.jpg'},{'src':'/assets/events/ankshala/hemsheela.jpg'},{'src':'/assets/events/ankshala/kvcmeri.jpg'},{'src':'/assets/events/ankshala/peters.jpg'},{'src':'/assets/events/ankshala/xaviers.jpg'}],
                'value' : 'ankshala'
            },
            {
                'name':'Knock Knock',
                'desc':'This is a series of aptitude questions based on various concepts of logical problems.These are to check the IQ and also show a miniature version of various competitive exams and interview questions. The person who solves in least time and with most correct answers is declared the winner of that week.',
                'src':[{'src':'/assets/events/knockknock/paper1.jpg'},{'src':'/assets/events/knockknock/paper2.jpg'}],
                'value' : 'knock_knock'
            },
            {
                'name':'Terrorist Takedown',
                'desc':'It is a test of both speed and skill, as the race is not just within the mind, but extends to the physical world where the team is required to hunt for clues, decipher the coded message and reach successive checkpoints.',
                'src':[{'src':'/assets/events/tt/tt.jpg'},{'src':'/assets/events/tt/1.jpg'},{'src':'/assets/events/tt/2.jpg'},{'src':'/assets/events/tt/3.jpg'},{'src':'/assets/events/tt/4.jpg'}],
                'value' : 'terrorist_takedown'
            }
            // ,
            // {
            //     'name' : 'TIME scholarship Test',
            //     'desc':'Ansible is a free software tool that allows you to configure and manage nodes. This is achieved by creating groups of machines and describing which actions should be taken on them. The required commands for this are issued from a central location. It has various built-in modules to allow easy configuration management. It uses SSH to connect to different nodes and hence nothing needs to be installed on the targeted machines. Ansible only runs on the main control machine which runs the commands.',
            //     'src':[{'src':'/assets/events/ankshala/bidhan.jpg'},{'src':'/assets/events/ankshala/guruteg.jpg'},{'src':'/assets/events/ankshala/hemsheela.jpg'},{'src':'/assets/events/ankshala/kvcmeri.jpg'},{'src':'/assets/events/ankshala/peters.jpg'},{'src':'/assets/events/ankshala/xaviers.jpg'}],
            //     'value' : 'time'   
            // }
        ]
        return(
            <div className="site-body-full" >
                <div className="fullpage-event-toggler">
                    <ul>
                    <h2>Flagship Events</h2>   
                    <br/> 
                    {this.eventToggle.map((item, index)=>(
                        <li>
                            <a href="" className={(item.value === this.state.active_event)?'active':null} key={index} onClick={(e)=>{e.preventDefault(); this.handleScrollEvent(item.value);}}>{item.name}</a>
                        </li>
                    ))}
                    </ul>
                    <div className="click-more-events">
                        <a href='/aavishkar'><h2>Click here for more events during fest</h2></a>
                    </div>
                </div>
                {flagshipEvents.map((item, index)=>(
                    <div data-aos="fade-in" className="fullpage-event-content" key={index} id={item.value}>
                        <h1>{item.name}</h1>
                        <div className="fullpage-event-slider">
                            <Slider images={item.src}/>
                        </div>
                        <div className="fullpage-event-desc">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        );
    }
}

export default Event;