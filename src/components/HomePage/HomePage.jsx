import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Address from './Address';
import PopularProducts from './PopularProducts';
import OurTeam from '@/app/team/page';
import WhyChooseUs from './WhyChooseUs';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Address/>
            <PopularProducts/>   
            <OurTeam/>
            <WhyChooseUs/>
        </div>
    );
}

export default HomePage;
