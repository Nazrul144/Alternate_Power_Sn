import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Address from './Address';
import PopularProducts from './PopularProducts';
import OurTeam from '@/app/team/page';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Address/>
            <PopularProducts/>   
            <OurTeam/>
        </div>
    );
}

export default HomePage;
