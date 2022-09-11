import React, { useEffect, useState } from 'react';
import OurSpecialityCart from '../OurSpecialityCart/OurSpecialityCart';

const OurSpeciality = () => {
    const [speciality, setSpeciality] = useState([]);

    useEffect(() => {
        fetch('ourSpeciality.json')
            .then(res => res.json())
            .then(data => setSpeciality(data));
    }, [])
    // console.log(speciality);
    return (
        <div className='mx-40 mb-12'>
            <h1 className='text-4xl mb-4'>Why you choose us</h1>
            <p className='w-2/5 mb-12'>Barton waited always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded</p>
            <div className="services-container grid grid-cols-3 gap-8">
                {
                    speciality.map(special => <OurSpecialityCart
                    key={special.id}
                    special={special}
                    ></OurSpecialityCart>)
                }
            </div>
        </div>
    );
};

export default OurSpeciality;