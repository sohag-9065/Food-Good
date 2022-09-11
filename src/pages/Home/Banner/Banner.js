import React from 'react';
import { Form, Hero, Input, InputGroup } from 'react-daisyui';
import BannerBackground from '../../../Images/bannerbackground.png'

const Banner = () => {
    const backgroundImageStyle = {
        height: '400px',
        backgroundImage: `url(${BannerBackground})`,
        filter: 'opacity(1)',
        backgroundSize: 'cover',
    };
    return (
        <div>
            {/* <Hero style={{ backgroundImage: `url(${BannerBackground})`, }} ></Hero> */}
            {/* <Hero
                style={backgroundImageStyle}
            >
                <Hero.Overlay />

                <Hero.Content className="text-center w-full">
                    <div className="flex justify-center w-full ">

                        <Form className='w-8/12 items-center'>
                            <h2 className='text-5xl mb-8 font-semibold'>Best food waiting for your belly</h2>
                            <InputGroup className='max-w-2xl justify-center' >
                                <Input type="text" placeholder="Search food item" className='w-6/12' bordered />
                                <span>Search</span>
                            </InputGroup>
                        </Form>
                    </div>
                </Hero.Content>
            </Hero> */}
            <div style={backgroundImageStyle} className='flex items-center justify-center'>
                <Form className='w-full items-center justify-center'>
                    <h2 className='text-5xl mb-8 font-semibold'>Best food waiting for your belly</h2>
                    <InputGroup className='max-w-2xl justify-center' >
                        <Input type="text" placeholder="Search food item" className='w-6/12' bordered />
                        <span>Search</span>
                    </InputGroup>
                </Form>
            </div>

        </div>
    );
};

export default Banner;