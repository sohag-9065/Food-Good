import React from 'react';
import { Card } from 'react-daisyui';

const OurSpecialityCart = ({ special }) => {
    const { title, description, img } = special;
    
    console.log(special)
    // console.log(title, description, img)
    
    
    return (
        <div>
            <Card >
                <Card.Image
                    src={img}
                    alt="Shoes"
                />
                <Card.Body className="items-center text-center">
                    <Card.Title tag="h2">{title}</Card.Title>
                    <p>{description}</p>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default OurSpecialityCart;