import React from 'react';
import FooterSection from '../../Shared/FooterSection/FooterSection';
import Banner from '../Banner/Banner';
import Meal from '../Meal/Meal';
import OurSpeciality from '../OurSpeciality/OurSpeciality';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Meal></Meal>
            <OurSpeciality></OurSpeciality>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Home;