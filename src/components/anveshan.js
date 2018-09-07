import React,{ Component } from 'react';
import './css/anveshan.css';
import poster from '../static/images/anveshan.jpg';

class Anveshan extends Component{
    render(){
        return(
            <div className="site-body-full">
                <h1>Annual Tech Magazine</h1>
                <hr/>
                <div className="anveshan">
                    <div className="anveshan-poster">
                        <img src={poster} />
                    </div>
                    <div className="anveshan-content">
                        <p>
                        Maths and Tech Club is here again presenting you an amazing opportunity to get your article featured in the 7th edition of the Anveshan,the Technical Magazine of NIT DURGAPUR. Anveshan is all set to create the " technical buzz " through your entries in the form of 
                        <br/>
                        <br/><b>Tech-related articles</b>, 
                        <br/><b>Tech-memes,</b>
                        <br/><b>Advancements in the field of Mathematics and Technology,</b>
                        <br/><b>Journal extracts,</b>
                        <br/><b>Research papers,</b>
                        <br/><b>Photography .</b>
                        <br/><br/>
                        <i style={{'font-size':'16px'}}>Exciting prizes await the first three entries while the best three will be given exciting goodies
                        and the best of all the articles would feature in our magazine.</i>
                        <br/>                          

                        So why wait? Hurry up guys! Just mail your entries along with
                        NAME,
                        DEPARTMENT,
                        YEAR OF STUDY,
                        CONTACT NUMBER to
                        <br/>
                        <a href="mailto:anveshan7.0@gmail.com" style={{'color':'#239ab4','font-size':'20px'}}>anveshan7.0@gmail.com</a>
                        <br/> The deadline for submission of your entries is September 24.
                        All other information would be soon updated in our facebook page https://www.facebook.com//mathsntechclub. 
                        <br/>
                        For queries,contact
                        <br/>
                        <div style={{'color':'#239ab4','font-size':'20px'}}>Tamal-9647128980</div>
                        <div style={{'color':'#239ab4','font-size':'20px'}}>Vijaya-9492446890</div>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Anveshan;