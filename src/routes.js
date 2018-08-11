import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carousel from './components/carousel';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import Events from './components/events';
import Team from './components/team';
import FirstPage from './components/firstpage';
import Aavishkar from './components/aavishkar';
import ContactUs from "./components/contactus";

export default ()=>(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact render={()=>( 
                <div>
                    <FirstPage />
                </div>
            )} />
            <Route path='/aboutus' exact render={()=>( 
                <div>
                    <FirstPage />
                </div>
            )} />
            <Route path='/events' exact render={()=>( 
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
            <Route path='/aavishkar' exact render={()=>( 
                <div>
                    <Header />
                    <Aavishkar />
                    <Footer />
                </div>
            )} />
            <Route path='/anveshan' exact render={()=>( 
                <div>
                    <Header />
                    <Aavishkar />
                    <Footer />
                </div>
            )} />
            <Route path='/contactus' exact render={()=>( 
                <div>
                    <Header />
                    <ContactUs />
                    <Footer />
                </div>
            )} />
        </Switch>
    </BrowserRouter>
);