import React from 'react';
import { Col,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Meal.css'

const Meal = ({meal}) => {
    // console.log(meal)
    const {strMeal, strMealThumb, strInstructions,strCategory,idMeal } = meal;
    // console.log(idMeal)
    return (
        
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title className='card-title'>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.substring(0, 90)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/meal/${idMeal}`}><button className='btn btn-primary'>See Details</button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Meal;