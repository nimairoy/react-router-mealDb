import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCardDetails from '../AllCardDetails/AllCardDetails';

const MealDetail = () => {
    const meals = useLoaderData();
    const {idMeal} = meals.meals;
    return (
        <div>
            {
                meals.meals.map(meal => <AllCardDetails key={meal.idMeal} meal={meal} />)
            }
        </div>
    );
};

export default MealDetail;