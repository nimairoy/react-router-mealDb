import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';
import { Container, Row } from 'react-bootstrap';

const Meals = () => {
    const meals = useLoaderData();
    // console.log(meals)
    return (
        <div className='container text-center py-4 mt-3'>
            <h1>Total Meals Items Here : {meals.meals.length}</h1>
            <Container>
                <Row>
                    {
                        meals.meals.map(meal => <Meal 
                                    key={meal.idMeal}
                                    meal={meal}
                            />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Meals;