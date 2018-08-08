import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carousel from './components/carousel';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import Events from './components/events';
import Team from './components/team';

export default ()=>(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact render={()=>( 
                <div>
                    <Header />
                    <Carousel />
                    <Body /> 
                    <Footer />
                </div>
            )} />
<<<<<<< HEAD
<<<<<<< HEAD
            <Route path='/event' exact render={()=>( 
=======
=======

>>>>>>> 8280817b... Event page updated
            <Route path='/aboutus' exact render={()=>( 
                <div>
                    <FirstPage />
                </div>
            )} />
<<<<<<< HEAD
            <Route path='/events' exact render={()=>( 
>>>>>>> 60f955ba... Event Page updated
=======

            <Route path='/event' exact render={()=>( 
>>>>>>> 8280817b... Event page updated
                <div>
                    <Header />
                    <Events />
                    <Footer />
                </div>
            )} />
            <Route path='/team' exact render={()=>( 
                <div>
                    <Header />
                    <Team />
                    <Footer />
                </div>
            )} />
        </Switch>
    </BrowserRouter>
);