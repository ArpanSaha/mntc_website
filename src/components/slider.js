import React, { Component } from 'react';
import './css/slider.css';

class Slider extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            activeImage : 'http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg'
        }
    }
    componentWillMount(){
        this.slideImages=[
            {
                'id' : 'id1',
                'src' : 'http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg'
            },
            {
                'id' : 'id2',
                'src' : 'http://thecodeplayer.com/uploads/media/40Ly3VB.jpg'
            },
            {
                'id' : 'id3',
                'src' : 'http://thecodeplayer.com/uploads/media/00kih8g.jpg'
            },
            {
                'id' : 'id4',
                'src' : 'http://thecodeplayer.com/uploads/media/2rT2vdx.jpg'
            },
            {
                'id' : 'id5',
                'src' : 'http://thecodeplayer.com/uploads/media/8k3N3EL.jpg'
            },
        ]
    }
    render(){
        return (
                <div className="event-slider">
                    {                        
                        this.slideImages.map((item,index)=>(    
                                <div className={(this.state.activeImage === item.src)?'slider-image':'slider-image-inactive'} key={index}>
                                    <img src={this.state.activeImage}/>
                                </div>
                        ))
                    } 
                    <div className='slider-toggler'>
                    {                        
                        this.slideImages.map((item,index)=>(    
                                <div className={'image-button ' + ((this.state.activeImage === item.src)?'active':'')} key={index} onClick={(e) => { e.preventDefault(); this.setState({ activeImage : item.src }) }}>
                                    <img src={item.src} width="100"/>
                                </div>
                        ))
                    }
                    </div>
                </div>
        )
    }
}

export default Slider;