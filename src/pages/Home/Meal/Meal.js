import React, { useState } from 'react';
import { Button } from 'react-daisyui';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

const Meal = () => {
    const [showMeal, setShowMeal] = useState("breakfast");

    const showBreakfat = mealTime => {
        setShowMeal(mealTime);

    }

    const showLunch = mealTime => {
        setShowMeal(mealTime);
    }

    const showDinner = mealTime => {
        setShowMeal(mealTime);
    }
    return (
        <div>
            <div id='meal' className="flex w-full component-preview p-4  items-center justify-center gap-2 font-sans ">
                <Button onClick={() => showBreakfat("breakfast")} variant="link"> Breakfast </Button>
                <Button onClick={() => showLunch("lunch")} variant="link"> Lunch </Button>
                <Button onClick={() => showDinner("dinner")} variant="link"> Dinner  </Button>
            </div>
            <div className='mx-40 mt-12'>
                {
                    showMeal === "breakfast" ?
                        <Breakfast></Breakfast>
                        :
                        showMeal === "lunch" ?
                            <Lunch></Lunch>
                            :
                            <Dinner></Dinner>

                }
            </div>

            <div className='flex justify-center my-8'>
                <Button >Checkout Your Food</Button>
            </div>
        </div>
    );
};

export default Meal;