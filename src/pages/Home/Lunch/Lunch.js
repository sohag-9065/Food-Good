import React, { useEffect, useState } from 'react';
import MealCart from '../Meal/MealCart/MealCart';

const Lunch = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setMeals(data));
    }, [])
    // console.log(meals);
    return (
        <div>
            <div className="services-container grid grid-cols-3 gap-8">
                {
                    meals.map(meal => <MealCart
                        key={meal.id}
                        meal={meal}
                    ></MealCart>)
                }
            </div>
        </div>
    );
};
export default Lunch;