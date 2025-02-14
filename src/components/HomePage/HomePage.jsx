import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Address from './Address';
import PopularProducts from './PopularProducts';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Address/>
            <PopularProducts/>    
        </div>
    );
}

export default HomePage;
