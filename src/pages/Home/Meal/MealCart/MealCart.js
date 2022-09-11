import React from 'react';
import { Card } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';

const MealCart = ({ meal }) => {
    const {id, name, price, description, img } = meal;
    const navigate = useNavigate();

    const navigateToMealDetail = id => {
        navigate(`/meal/${id}`)
    }
    return (
        <div onClick={()=>navigateToMealDetail(id)} className='service cursor-pointer'>
            <Card >
                <Card.Image
                    src={img}
                    alt="Shoes"
                />
                <Card.Body className="items-center text-center">
                    <Card.Title tag="h2">{name}</Card.Title>
                    <p>{description}</p>
                    <p>{price}</p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MealCart;